import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// TODO: Update this
export default defineConfig({
  site: "https://loney.dev",
  integrations: [tailwind()],
});
