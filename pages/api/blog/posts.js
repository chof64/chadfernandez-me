import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function posts(req, res) {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  res.status(200).json(posts);
}

export default posts;
