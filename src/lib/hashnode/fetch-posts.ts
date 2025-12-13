import { fetcher } from "./fetcher";
import type { HashnodePostListResponse, HashnodePostNode } from "./types";

export const fetchBlogPosts = async (): Promise<HashnodePostNode[]> => {
  const cacheBust = `_${Date.now()}`;
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
    });
    return data.publication.posts.edges.map(({ node }) => node);
  } catch {
    return [];
  }
};
