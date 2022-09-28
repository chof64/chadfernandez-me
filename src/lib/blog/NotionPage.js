import { Client, collectPaginatedAPI } from "@notionhq/client";
import slugify from "slugify";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// function accepts a slug and returns a blog post object
// converted into markdown.

// accept slug, query database and see if the slug exists,
// if it does, return the post id.

export const getPostById = async (id) => {
  const PAGE_RESPONSE = await notion.pages.retrieve({
    page_id: id,
  });

  PAGE_RESPONSE.slug = slugify(
    PAGE_RESPONSE.properties.Name.title[0].plain_text,
    {
      lower: true,
      strict: true,
    }
  );

  if (PAGE_RESPONSE.created_time != null) {
    PAGE_RESPONSE.created_time_parsed = new Date(
      PAGE_RESPONSE.created_time
    ).toDateString();
  }
  if (PAGE_RESPONSE.last_edited_time != null) {
    PAGE_RESPONSE.last_edited_time_parsed = new Date(
      PAGE_RESPONSE.last_edited_time
    ).toDateString();
  }

  if (PAGE_RESPONSE.cover != null) {
    if (PAGE_RESPONSE.cover.type === "file") {
      PAGE_RESPONSE.cover.url = PAGE_RESPONSE.cover.file.url;
    }
    if (PAGE_RESPONSE.cover.type === "external") {
      PAGE_RESPONSE.cover.url = PAGE_RESPONSE.cover.external.url;
    }
  }

  return PAGE_RESPONSE;
};

export const getPageBlocks = async (id) => {
  const BLOCK_RESPONSE = collectPaginatedAPI(notion.blocks.children.list, {
    block_id: id,
    page_size: 100,
  });

  return BLOCK_RESPONSE;
};
