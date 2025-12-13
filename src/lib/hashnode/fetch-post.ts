import { fetcher } from "./fetcher";
import type { HashnodePostNode, HashnodePostNodeResponse } from "./types";

export const fetchBlogPost = async (
  slug: string
): Promise<HashnodePostNode | null> => {
  const cacheBust = `_${Date.now()}`;
  const query = `
    query FetchBlogPost${cacheBust}($slug: String!, $publicationId: ObjectId!) {
      publication(id: $publicationId) {
        post(slug: $slug) {
          slug
          title
          tags {
            name
            slug
          }
          coverImage {
            url
          }
          brief
          readTimeInMinutes
          series {
            name
            slug
          }
          content {
            html
          }
          publishedAt
          updatedAt
        }
      }
    }
  `;

  try {
    const data = await fetcher<HashnodePostNodeResponse>({
      query,
      variables: { slug },
    });
    return data.publication.post;
  } catch {
    return null;
  }
};
