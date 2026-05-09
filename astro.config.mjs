// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "v02ulvi7", // Replace this with your actual ID
      dataset: "production",
      apiVersion: "2024-05-09", // Use today's date or the date you created the project
      useCdn: false, // Set to false for development so it updates instantly
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
