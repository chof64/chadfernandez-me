import type { APIRoute } from "astro";
import { siteUrl } from "~/lib/site";

export const GET: APIRoute = () => {
  const url = siteUrl.href.endsWith("/")
    ? siteUrl.href.slice(0, -1)
    : siteUrl.href;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>${url}</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<changefreq>monthly</changefreq>
<priority>1</priority>
</url>
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
