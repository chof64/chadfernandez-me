import { fetcher } from './fetcher';

interface HashnodePostNode {
  slug: string;
  title: string;
  tags: {
    name: string;
    slug: string;
  }[];
  coverImage: {
    url: string;
  } | null;
  brief: string;
  readTimeInMinutes: number;
  series: {
    name: string;
    slug: string;
  } | null;
  content: {
    html: string;
  };
  publishedAt: string;
  updatedAt: string;
}

interface HashnodeResponse {
  publication: {
    post: HashnodePostNode;
  };
}

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
    const data = await fetcher<HashnodeResponse>({
      query,
      variables: { slug },
      revalidate: forceRefresh ? 0 : revalidate,
    });
    return data.publication.post;
  } catch {
    return null;
  }
};
