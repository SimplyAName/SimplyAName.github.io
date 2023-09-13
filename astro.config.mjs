import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// TODO: Update this
export default defineConfig({
  site: 'https://astronaut.github.io',
  integrations: [tailwind()]
});