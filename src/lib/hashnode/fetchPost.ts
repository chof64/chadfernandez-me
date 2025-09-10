import { fetcher } from './fetcher';
import type { HashnodePostNode, HashnodePostNodeResponse } from './types';

export const fetchBlogPost = async (
  slug: string,
  {
    revalidate = 60,
    forceRefresh = false,
  }: {
    revalidate?: number;
    forceRefresh?: boolean;
  } = {}
): Promise<HashnodePostNode | null> => {
  const cacheBust = forceRefresh ? `_${Date.now()}` : '';
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
      revalidate: forceRefresh ? 0 : revalidate,
    });
    return data.publication.post;
  } catch {
    return null;
  }
};
