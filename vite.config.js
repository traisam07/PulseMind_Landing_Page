import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Meta tags in index.html are filled from en.json so copy lives in one place.
const en = JSON.parse(readFileSync(new URL('./src/content/en.json', import.meta.url), 'utf8'))
const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function contentMeta() {
  return {
    name: 'content-meta',
    transformIndexHtml: (html) =>
      html.replaceAll('%META_TITLE%', escape(en.meta.title)).replaceAll('%META_DESCRIPTION%', escape(en.meta.description)),
  }
}

// GitHub Pages serves the site from /<repo-name>/; the deploy workflow sets BASE_PATH.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss(), contentMeta()],
})
