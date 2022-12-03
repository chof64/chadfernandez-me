import { Client } from "@notionhq/client";

import { generateSlug } from "/src/utils/generateSlug";
import { transformIsoToEnglish } from "/src/utils/transformIsoToEnglish";

const _notion = new Client({ auth: process.env.NOTION_TOKEN });

// TODO: Add error handling if page is not found.
export const getPostMetadata = async (id) => {
  const metadata = await _notion.pages.retrieve({ page_id: id });
  metadata.slug = generateSlug(metadata.properties.Name.title[0].plain_text);
  metadata.parsed_created_time = transformIsoToEnglish(metadata.created_time);

  return metadata;
};
