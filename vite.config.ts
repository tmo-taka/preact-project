import path from 'path';
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import vike from 'vike/plugin'
import { createRequire } from 'module'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
  plugins: [
    preact({
      babel: {
        // Change cwd to load Preact Babel plugins
        cwd: createRequire(import.meta.url).resolve('@preact/preset-vite')
      }
    }),
    vike(),
  ],
  server: {
    proxy: {
      '/playhtApi': {
        target: 'https://api.play.ht/api/v2/tts',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/playhtApi/, ''),
      },
      '/translateApi': {
        // target: process.env.VITE_TRANSLATION_API_URL,
        target: 'https://mt-auto-minhon-mlt.ucri.jgn-x.jp/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/translateApi/, ''),
      },
    }
  }
})
