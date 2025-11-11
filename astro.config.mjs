import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://authisha-site.vercel.app', // your deployed site URL
  integrations: [
    mdx(),
    tailwind(),
    sitemap(), // generates sitemap.xml automatically
  ],
});