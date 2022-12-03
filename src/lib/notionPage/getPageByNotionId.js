import { getPostMetadata } from "./getPostMetadata";
import { getPostContent } from "./getPostContent";

export const getPageByNotionId = async (id) => {
  const metadata = await getPostMetadata(id);
  const content = await getPostContent(id);

  return { metadata, content };
};
