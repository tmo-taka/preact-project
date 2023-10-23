import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    proxy: {
      '/pokeApi' : {
        target: 'https://pokeapi.co/api/v2/pokemon',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pokeApi/, ''),
      }
    }
  }
})
