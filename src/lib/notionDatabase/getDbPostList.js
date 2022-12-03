import { Client } from "@notionhq/client";

import sections from "/config/pages.notion.config";
import { getConfig } from "/src/utils/getConfig";
import { getDbMetadata } from "./getDbMetadata";
import { getDbItems } from "./getDbItems";

const _notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getDbPostList = async (page) => {
  const _config = getConfig({
    key: "name",
    value: page,
    config: sections,
    index: "pages",
  });

  const metadata = await getDbMetadata(_config.notion_id);
  const items = await getDbItems(_config.notion_id, _config.notion_conditions);
  return { metadata, items };
};
