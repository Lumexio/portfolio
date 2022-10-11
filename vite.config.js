import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// add this import at the top:
import preprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [svelte()]
})
