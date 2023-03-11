import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import mdx from '@mdx-js/rollup';

const options = {
  remarkPlugins: [
  ],
  rehypePlugins: [],
};

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx(options) },
    react()
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@base-ui', replacement: path.resolve(__dirname, '../base-ui') },
    ]
  }
});
