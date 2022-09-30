// IMPORT: External
import { Client, collectPaginatedAPI } from "@notionhq/client";

// IMPORT: Utilities

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// getPostMetadata
export const getPostMetadata = async (pageId) => {
  const RESPONSE = await notion.pages.retrieve({
    page_id: pageId,
  });

  return RESPONSE;
};

// getPostContent
export const getPostContent = async (pageId) => {
  const POST_BLOCKS = await getPostBlocks(pageId);
  const POST_CONTENT = await getChildrenBlocks(POST_BLOCKS);

  return POST_CONTENT;
};

const getPostBlocks = async (pageId) => {
  const RESPONSE = collectPaginatedAPI(notion.blocks.children.list, {
    block_id: pageId,
    page_size: 100,
  });

  return RESPONSE;
};

const getChildrenBlocks = async (blocks) => {
  const CHILDREN_BLOCKS = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getPostBlocks(block.id),
        };
      })
  );

  const WITH_CHILDREN_BLOCKS = blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = CHILDREN_BLOCKS.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return WITH_CHILDREN_BLOCKS;
};
