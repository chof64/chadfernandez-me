import { getBlogPostBySlug } from "/src/lib/blog/NotionPage";
import slugify from "slugify";

export default async function post(req, res) {
  const { slug } = req.query;

  // const POST_ITEM = await getBlogPostBySlug(slug);
  const RESPONSE = slugify(slug, { lower: true, strict: true });

  res.status(200).json(RESPONSE);
}
