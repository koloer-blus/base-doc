import { Plugin } from 'vite';
import path from 'path';
import fs from 'fs-extra';
import _ from 'lodash';
import prettier from "prettier/standalone";
import codeParse from "prettier/parser-typescript";

interface ComponentMap {
  [componentName: string]: string;
}

function prettierCode(code: string) {
  try {
    return prettier.format(code, {
      parser: "typescript",
      plugins: [codeParse],
    });
  } catch (error) {
    return code;
  }
}

const hashFilePath = path.resolve(__dirname, "../temp/scanned-hash.json");

/**
 * Vite 插件
 */
export default function mdxScanner(props: {
  compPath: string;
  compAliasName: string;
  compDirName: string;
  outputRoutesPath: string;
}): Plugin {
  const { compPath, compAliasName, compDirName, outputRoutesPath } = props;
  const componentMap: ComponentMap = {};
  const content: string[] = [
    `import { lazy } from 'react';`
  ];
  const routes: string[] = [
    'export const routeList = [',
  ];
  return {
    name: 'mdxScanner',
    enforce: 'pre',
    async config() {
      // 遍历所有组件的 MDX 文件
      const hasHistory = await fs.pathExists(hashFilePath);
      let hashMap = {};
      if (hasHistory) {
        hashMap = await fs.readJSON(hashFilePath);
      }
      const componentsPath = path.join(compPath, compDirName);
      try {
        const files = await fs.readdir(componentsPath);
        if (!files || files.length === 0) {
          console.warn('No components found in the components directory');
          return;
        }

        const promises = files.map(async (fileName) => {
          const filePath = `${componentsPath}/${fileName}/README.mdx`;
          const exist = await fs.pathExists(filePath);
          if (exist) {
            const compName = _.upperFirst(_.camelCase(fileName));
            content.push(`const ${compName} = lazy(() => import("${path.join(compAliasName, compDirName, fileName, "README.mdx")}"));`);
            routes.push(`{ path: '${compName}', element: <${compName} /> },`);
            componentMap[compName] = fileName;
          }
        });

        await Promise.all(promises);
        if (Object.keys(componentMap).length === 0) {
          console.warn('No components with names found in the components directory');
          return;
        }
        routes.push(']');
        if (hasHistory && _.isEqual(componentMap, hashMap)) {
          console.log('Has History Scanned Data and Nothing Change~~');
          return;
        }
        await fs.ensureFile(hashFilePath);
        // 将组件映射写入 JSON 文件
        await fs.writeFile(hashFilePath, JSON.stringify(componentMap), {
          flag: 'w+'
        });
        await fs.writeFile(outputRoutesPath, prettierCode(`${content.join('\n')}${routes.join('\n')}`), {
          flag: 'w+'
        });
      } catch (err) {
        console.error(`Failed to read components directory ${componentsPath}: ${err.message}`);
      }
    },
  };
}