/* eslint-disable no-underscore-dangle */
import { fileURLToPath } from 'url';
import path from 'path';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        homePage: resolve(__dirname, 'index.html'),
      },
    },
  },
});
