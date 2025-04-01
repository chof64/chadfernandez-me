import { fetcher } from "./fetcher";

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
): Promise<HashnodePostNode | null> => {
  const randomString = Math.random().toString(36).substring(2, 15);

  const query = `
    query FetchBlogPost${randomString}($slug: String!, $publicationId: ObjectId!) {
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
    });
    return data.publication.post;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
};
