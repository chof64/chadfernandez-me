import { Client } from "@notionhq/client";

const _notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getDbMetadata = async (id) => {
  return await _notion.databases.retrieve({
    database_id: id,
  });
};
