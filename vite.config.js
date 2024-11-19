import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __APP_NAME__: JSON.stringify(process.env.npm_package_name),
  },
  build: {
    outDir: 'public',
    emptyOutDir: true, // also necessary
  }
})
