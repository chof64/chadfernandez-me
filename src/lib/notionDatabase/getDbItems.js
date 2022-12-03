import { Client } from "@notionhq/client";

const _notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getDbItems = async (id, conditions) => {
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
