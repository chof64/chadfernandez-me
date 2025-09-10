import { fetcher } from './fetcher';
import type { HashnodePostListResponse, HashnodePostNode } from './types';

export const fetchBlogPosts = async ({
  revalidate = 60,
  forceRefresh = false,
}: {
  revalidate?: number;
  forceRefresh?: boolean;
} = {}): Promise<HashnodePostNode[]> => {
  const cacheBust = forceRefresh ? `_${Date.now()}` : '';
  const query = `
    query FetchBlogPosts${cacheBust}($publicationId: ObjectId!) {
      publication(id: $publicationId) {
        posts(first: 10) {
          edges {
            node {
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
              publishedAt
                updatedAt
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetcher<HashnodePostListResponse>({
      query,
      revalidate: forceRefresh ? 0 : revalidate,
    });
    return data.publication.posts.edges.map(({ node }) => node);
  } catch {
    return [];
  }
};
