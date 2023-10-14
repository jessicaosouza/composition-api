// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import TailwindCSS from 'tailwindcss';
import Autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        TailwindCSS,
        Autoprefixer,
      ],
    },
  }  
});
