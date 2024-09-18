import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sci-nad.com', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), lit(), icon()], // Add renderers to the config
  output: 'hybrid', // Use hybrid mode to maintain static generation while enabling server-side features
  adapter: vercel({
    webAnalytics: { enabled: true },
    // Only apply serverless functions to pages that need them
    functionPerRoute: true,
  }),
});