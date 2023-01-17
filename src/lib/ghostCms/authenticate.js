import GhostContentAPI from "@tryghost/content-api";

export const authenticate = () => {
  return new GhostContentAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_CONTENT_API,
    version: "v5.0",
  });
};
