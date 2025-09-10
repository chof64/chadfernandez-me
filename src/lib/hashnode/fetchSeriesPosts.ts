import { fetcher } from './fetcher';
import type { HashnodePostNode, HashnodeSeriesPostListResponse } from './types';

export const fetchSeriesPosts = async (
  seriesSlug: string,
  {
    revalidate = 60,
    forceRefresh = false,
  }: {
    revalidate?: number;
    forceRefresh?: boolean;
  } = {}
): Promise<HashnodePostNode[]> => {
  const cacheBust = forceRefresh ? `_${Date.now()}` : '';
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
      revalidate: forceRefresh ? 0 : revalidate,
    });
    if (!data.publication.series) {
      return [];
    }
    return data.publication.series.posts.edges.map(({ node }) => node);
  } catch {
    return [];
  }
};
