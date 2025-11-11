import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://authisha-site.vercel.app', // your deployed site URL
  integrations: [
    mdx(),
    tailwind(),
    sitemap(), // only one sitemap integration
  ],
});
