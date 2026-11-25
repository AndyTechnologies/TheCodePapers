// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss';

// https://astro.build/config
export default defineConfig({
  site: 'https://andytechnologies.github.io',
  base: '/TheCodePapers',
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  integrations: [sitemap()],
});