import useSWR from "swr";

import { getPostMetadata } from "./getPostMetadata";
import { getPostContent } from "./getPostContent";

export const resolvePageByNotionId = async (id) => {
  const metadata = await getPostMetadata(id);
  const content = await getPostContent(id);

  return { metadata, content };
};
