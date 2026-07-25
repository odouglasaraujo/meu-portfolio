import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // Em produção no GitHub Pages o site vive em /meu-portfolio/.
  // Dev local e outros hosts (ex.: Vercel) continuam na raiz.
  base: process.env.GITHUB_PAGES ? '/meu-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    port: 5190,
    strictPort: true,
  },
})
