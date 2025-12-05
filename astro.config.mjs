import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "http://localhost:3000",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: cloudflare(),
});
