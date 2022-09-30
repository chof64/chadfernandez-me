import { getPostedDatabaseItems } from "/src/modules/blog/DatabaseDefault";
import { getPostContent } from "/src/modules/blog/PostsDefault";

export default async function post(req, res) {
  const { slug } = req.query;

  const POSTED_ITEMS = await getPostedDatabaseItems(process.env.NOTION_BLOG_DB);
  const POST = POSTED_ITEMS.results.find((post) => post.slug === slug);

  if (!POST) {
    return res.status(404).json({ error: "Post not found" });
  }

  const POST_CONTENT = await getPostContent(POST.id);

  return res.status(200).json({ metadata: POST, content: POST_CONTENT });
}
