import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import mdx from '@mdx-js/rollup';
import mdxScanner from './plugins/doc-scanned';


const componentsPath = path.resolve(__dirname, '../base-ui');
const componentAliasName = '@base-ui';
const outPutRouesPath = path.resolve(__dirname, './src/routes/component.routes.tsx');

const options = {
  remarkPlugins: [
  ],
  rehypePlugins: [],
};

export default defineConfig({
  plugins: [
    mdxScanner({
      compAliasName: componentAliasName,
      compDirName: 'components',
      compPath: componentsPath,
      outputRoutesPath: outPutRouesPath
    }),
    { enforce: 'pre', ...mdx(options) } as any,
    react()
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.mdx', '.md'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: componentAliasName, replacement: componentsPath },
    ]
  }
});
