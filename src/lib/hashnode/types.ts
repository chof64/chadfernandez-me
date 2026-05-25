export interface HashnodePostNode {
  brief: string;
  content: {
    html: string;
  };
  coverImage: {
    url: string;
  } | null;
  publishedAt: string;
  readTimeInMinutes: number;
  series: {
    name: string;
    slug: string;
  } | null;
  slug: string;
  tags: {
    name: string;
    slug: string;
  }[];
  title: string;
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
