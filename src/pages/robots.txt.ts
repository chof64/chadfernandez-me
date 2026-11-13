import type { APIRoute } from "astro";
import { siteUrl } from "~/lib/site";

export const GET: APIRoute = () => {
  const sitemap = new URL("/sitemap.xml", siteUrl);

  return new Response(`User-Agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
