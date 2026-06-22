import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// BASE_PATH is set by the GitHub Pages workflow to "/<repo-name>".
// Empty for local dev and custom-domain deploys.
const base = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: { base },
    prerender: { entries: ['*'] }
  }
};

export default config;
