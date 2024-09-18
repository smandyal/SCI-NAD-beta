// This file configures Astro, a static site generator for modern web development.

import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // Set the public domain for the site, used for generating sitemaps and canonical URLs
  site: 'https://www.sci-nad.com',

  // Enable sitemap generation
  sitemap: true,

  // Add integrations (plugins) to extend Astro's functionality:
  // - sitemap: generates a sitemap for the site
  // - mdx: allows use of MDX (Markdown with JSX) in content
  // - lit: enables use of Lit components
  // - icon: provides icon support
  integrations: [sitemap(), mdx(), lit(), icon()],

  // Set the output mode to 'server' for server-side rendering
  output: 'server',

  // Configure the Vercel adapter for serverless deployment
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});