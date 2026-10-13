// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://vickum.com",
	integrations: [mdx(), sitemap()],
	// Old blog template pages
	redirects: {
		"/blog": "/services",
		"/blog/first-post": "/services",
		"/blog/second-post": "/services",
		"/blog/third-post": "/services",
		"/blog/markdown-style-guide": "/services",
		"/blog/using-mdx": "/services",
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
