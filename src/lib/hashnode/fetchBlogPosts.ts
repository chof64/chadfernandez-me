import { fetcher } from "./fetcher";
import { cacheBuster } from "./utils";

interface HashnodePostNode {
  slug: string;
  title: string;
  tags: Array<{
    name: string;
    slug: string;
  }>;
  coverImage: {
    url: string;
  } | null;
  brief: string;
  readTimeInMinutes: number;
  series: {
    name: string;
    slug: string;
  } | null;
  publishedAt: string;
  updatedAt: string;
}

interface HashnodeResponse {
  publication: {
    posts: {
      edges: Array<{ node: HashnodePostNode }>;
    };
  };
}

export const fetchBlogPosts = async (): Promise<HashnodePostNode[]> => {
  const query = `
    query FetchBlogPost${cacheBuster()}($publicationId: ObjectId!) {
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
    const data = await fetcher<HashnodeResponse>({ query });
    return data.publication.posts.edges.map(({ node }) => node);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};
