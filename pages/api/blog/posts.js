import { getPublishedPosts } from "/src/lib/blog/NotionDatabase";

export default async function posts(req, res) {
  // const posts = await notion.databases.query({
  //   database_id: process.env.NOTION_DATABASE_ID,
  // });

  const database = await getPublishedPosts(process.env.NOTION_BLOG_DB);

  res.status(200).json(database);
}
