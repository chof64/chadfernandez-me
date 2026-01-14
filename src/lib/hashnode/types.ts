export interface HashnodePostNode {
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

export interface HashnodePostNodeResponse {
  publication: {
    post: HashnodePostNode;
  };
}

export interface HashnodePostListResponse {
  publication: {
    posts: {
      edges: Array<{ node: HashnodePostNode }>;
    };
  };
}

export interface HashnodeSeriesPostListResponse {
  publication: {
    series: {
      posts: {
        edges: Array<{ node: HashnodePostNode }>;
      };
    } | null;
  };
}
