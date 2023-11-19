import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import vike from 'vike/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), vike()],
  server: {
    proxy: {
      '/pokeApi' : {
        target: 'https://pokeapi.co/api/v2/pokemon',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pokeApi/, ''),
      },
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
