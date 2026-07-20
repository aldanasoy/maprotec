import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aldanasoy.github.io',
  base: '/mayprotec',
  output: 'static',
  integrations: [sitemap()],
  build: { assets: '_assets' },
  vite: {
    plugins: [tailwindcss()],
  },
});
