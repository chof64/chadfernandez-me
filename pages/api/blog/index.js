import {
  getDatabaseMetadata,
  getPostedDatabaseItems,
} from "/src/modules/blog/DatabaseDefault";

export default async function blog(req, res) {
  const DATABASE_METADATA = await getDatabaseMetadata(
    process.env.NOTION_BLOG_DB
  );

  const DATABASE_ITEMS = await getPostedDatabaseItems(
    process.env.NOTION_BLOG_DB
  );

  res.status(200).json({ metadata: DATABASE_METADATA, items: DATABASE_ITEMS });
}
