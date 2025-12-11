/**
 * Utility function for making GraphQL requests
 */
import { env } from "~/env";

type GraphQLResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

type FetcherData = {
  query: string;
  variables?: Record<string, unknown>;
};

/**
 * A reusable GraphQL fetcher that can be used across the application
 * with built-in support for the Hashnode publication ID
 */
export async function fetcher<T = unknown>(
  data: FetcherData & { revalidate?: number }
): Promise<T> {
  const hashnodeEndpoint = "https://gql.hashnode.com";

  const variables = {
    ...data.variables,
    publicationId: env.HASHNODE_PUBLICATION_ID,
  };

  // const revalidate = data.revalidate ?? 60;

  const response = await fetch(hashnodeEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: data.query,
      variables,
    }),
    // next: {
    //   revalidate,
    // },
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }

  const json = (await response.json()) as GraphQLResponse<T>;

  if (json.errors) {
    throw new Error(
      `GraphQL errors: ${json.errors.map((e) => e.message).join(", ")}`
    );
  }

  if (!json.data) {
    throw new Error("No data returned from GraphQL API");
  }

  return json.data;
}
