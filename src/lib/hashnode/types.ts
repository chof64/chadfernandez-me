export type HashnodePostNode = {
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
};

export type HashnodePostNodeResponse = {
  publication: {
    post: HashnodePostNode;
  };
};

export type HashnodePostListResponse = {
  publication: {
    posts: {
      edges: Array<{ node: HashnodePostNode }>;
    };
  };
};

export type HashnodeSeriesPostListResponse = {
  publication: {
    series: {
      posts: {
        edges: Array<{ node: HashnodePostNode }>;
      };
    } | null;
  };
};
