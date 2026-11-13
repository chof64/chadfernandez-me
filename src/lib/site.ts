import { BASE_URL } from "astro:env/server";

export const siteUrl = new URL(BASE_URL);

if (import.meta.env.PROD && siteUrl.hostname === "localhost") {
  throw new Error("BASE_URL must be set for production builds");
}
