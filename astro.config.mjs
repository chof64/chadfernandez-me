import "dotenv/config";

import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.BASE_URL,
  vite: {
    // @ts-expect-error tailwind plugin types
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: cloudflare(),
});
