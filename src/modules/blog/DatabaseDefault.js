// IMPORT: EXTERNAL
import { Client } from "@notionhq/client";

// IMPORT: Utilities
import { generateSlug } from "/src/utils/SlugifyUtility";
import { transformISOtoEnglish } from "/src/utils/DateParseUtilities";

// initialize notion client
const notion = new Client({ auth: process.env.NOTION_TOKEN });

// get database metadata.
export const getDatabaseMetadata = async (databaseId) => {
  const RESPONSE = await notion.databases.retrieve({
    database_id: databaseId,
  });

  return RESPONSE;
};

// get database items/content. blog posts list.
export const getPostedDatabaseItems = async (databaseId) => {
  const RESPONSE = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status",
      status: {
        does_not_equal: "Draft",
      },
    },
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

  RESPONSE.results.forEach((result) => {
    result.slug = generateSlug(result.properties.Name.title[0].plain_text);
    result.parsed_created_time = transformISOtoEnglish(result.created_time);
    result.parsed_last_edited_time = transformISOtoEnglish(
      result.last_edited_time
    );
    if (result.cover != null) {
      const TYPE = result.cover.type;
      result.cover.url = result.cover[TYPE].url;
    }
  });

  return RESPONSE;
};
