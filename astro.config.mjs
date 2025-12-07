import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { PUBLIC_BASE_URL } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  ""
);

export default defineConfig({
  site: PUBLIC_BASE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: cloudflare(),
});
