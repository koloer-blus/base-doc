import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'components/index.ts'),
      name: 'base-ui',
      fileName: 'base-ui',
    },
    rollupOptions: {
      external: ['react', 'reactDOM'],
      output: {
        globals: {
          react: 'React',
          reactDOM: 'react-dom/client'
        },
      },
    },
  }
});
