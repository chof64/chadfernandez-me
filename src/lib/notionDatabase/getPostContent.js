import { Client } from "@notionhq/client";

const _notion = new Client({ auth: process.env.NOTION_TOKEN });

// TODO: Look into adding error handling if page is not found.
export const getPostContent = async (id) => {
  const postBlocks = await _getPostBlocks(id);
  const postContent = await _getChildrenBLocks(postBlocks);

  return postContent;
};

// TODO: Look into adding iteration if >100 blocks.
const _getPostBlocks = async (id) => {
  const blocks = await _notion.blocks.children.list({
    block_id: id,
    page_size: 100,
  });

  return blocks.results;
};

const _getChildrenBLocks = async (blocks) => {
  const childrenBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return { id: block.id, children: await _getPostBlocks(block.id) };
      })
  );

  const withChildrenBLocks = blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childrenBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return withChildrenBLocks;
};
