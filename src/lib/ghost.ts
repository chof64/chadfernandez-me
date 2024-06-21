import { TSGhostContentAPI } from "@ts-ghost/content-api";

import { env } from "~/env";

export const ghost = new TSGhostContentAPI(
  env.GHOST_API_URL,
  env.GHOST_CONTENT_API_KEY,
  "v5.85",
);
