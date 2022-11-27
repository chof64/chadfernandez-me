import { Client } from "@notionhq/client";

import { generateSlug } from "/src/utils/slugifyUtils";
import { dateIsoToEnglish } from "/src/utils/dateUtils";

const _notion = new Client({ auth: process.env.NOTION_TOKEN });

// TODO: Add error handling if page is not found.
export const getPostMetadata = async (id) => {
  const metadata = await _notion.pages.retrieve({ page_id: id });
  metadata.slug = generateSlug(metadata.properties.Name.title[0].plain_text);
  metadata.parsed_created_time = dateIsoToEnglish(metadata.created_time);

  return metadata;
};
