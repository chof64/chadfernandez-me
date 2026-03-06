/**
 * Utility function for making GraphQL requests
 */
// Hashnode integration removed. This file remains as a placeholder to avoid
// breaking imports elsewhere in the codebase. Calling the fetcher will throw
// at runtime to make the removal explicit.

interface FetcherData {
  query: string;
  variables?: Record<string, unknown>;
  revalidate?: number;
}

export async function fetcher<T = unknown>(_data: FetcherData): Promise<T> {
  throw new Error(
    "Hashnode integration removed: fetcher is no longer available."
  );
}
