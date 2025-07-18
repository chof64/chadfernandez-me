import { fetcher } from './fetcher';

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
    const data = await fetcher<HashnodeResponse>({
      query,
      revalidate: forceRefresh ? 0 : revalidate,
    });
    return data.publication.posts.edges.map(({ node }) => node);
  } catch {
    return [];
  }
};
