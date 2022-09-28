import { Client } from "@notionhq/client";
import slugify from "slugify";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabaseObject = async (databaseId) => {
  const response = await notion.databases.retrieve({
    database_id: databaseId,
  });

  return response;
};

export const getAllPosts = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response;
};

export const getPublishedPosts = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    // filter published in property.type.status
    filter: {
      property: "Status",
      status: {
        does_not_equal: "Draft",
      },
    },
    // sort by create_time
    sorts: [
      {
        property: "Status",
        direction: "descending",
      },
      {
        timestamp: "created_time",
        direction: "descending",
      },
    ],
  });

  response.results.forEach((item) => {
    item.slug = slugify(item.properties.Name.title[0].plain_text, {
      lower: true,
      strict: true,
    });

    if (item.created_time != null) {
      item.created_time_parsed = new Date(item.created_time).toDateString();
    }
    if (item.last_edited_time != null) {
      item.last_edited_time_parsed = new Date(
        item.last_edited_time
      ).toDateString();
    }

    if (item.cover != null) {
      if (item.cover.type === "file") {
        item.cover.url = item.cover.file.url;
      }
      if (item.cover.type === "external") {
        item.cover.url = item.cover.external.url;
      }
    }
  });

  return response;
};
