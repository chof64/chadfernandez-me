import { getSecret } from "astro:env/server";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: getSecret("BASE_URL") ?? "http://localhost:3000",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
