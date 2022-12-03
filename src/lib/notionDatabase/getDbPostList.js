import { Client } from "@notionhq/client";

import sections from "/config/pages.notion.config";
import { getConfig } from "/src/utils/getConfig";
import { getDbMetadata } from "./getDbMetadata";
import { getDbItems } from "./getDbItems";
import { generateSlug } from "/src/utils/generateSlug";
import { transformIsoToEnglish } from "/src/utils/transformIsoToEnglish";

const _notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getDbPostList = async (section) => {
  const _config = getConfig("name", section, sections);

  const metadata = await getDbMetadata(_config.notion_id);
  const items = await _dbItems(_config.notion_id, _config.notion_conditions);
  return { metadata, items };
};

const _dbItems = async (id, conditions) => {
  const result = await _notion.databases.query({
    database_id: id,
    filter: conditions.filter,
    sorts: conditions.sorts,
  });

  result.results.forEach((item) => {
    item.slug = generateSlug(item.properties.Name.title[0].plain_text);
    item.parsed_created_time = transformIsoToEnglish(item.created_time);
    item.parsed_last_edited_time = transformIsoToEnglish(item.last_edited_time);
  });

  return result;
};
