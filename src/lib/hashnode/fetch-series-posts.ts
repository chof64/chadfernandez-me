import { fetcher } from "./fetcher";
import type { HashnodePostNode, HashnodeSeriesPostListResponse } from "./types";

export const fetchSeriesPosts = async (
  seriesSlug: string
): Promise<HashnodePostNode[]> => {
  const cacheBust = `_${Date.now()}`;
  const query = `
    query FetchSeriesPosts${cacheBust}($publicationId: ObjectId!, $seriesSlug: String!) {
      publication(id: $publicationId) {
        series(slug: $seriesSlug) {
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
    }
  `;

  try {
    const data = await fetcher<HashnodeSeriesPostListResponse>({
      query,
      variables: { seriesSlug },
      revalidate: 600,
    });
    if (!data.publication.series) {
      return [];
    }
    return data.publication.series.posts.edges.map(({ node }) => node);
  } catch {
    return [];
  }
};
