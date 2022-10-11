import preprocess from 'svelte-preprocess';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// add this import at the top:


// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [svelte({
    preprocess: preprocess()
  })]
})
