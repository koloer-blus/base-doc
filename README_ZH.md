# base-doc

> 提供基于`monorepo`方式进行组件库生态的搭建模版

## 背景介绍

现在的组件库技术方案大多采用单包的方式，例如:

```bash
├── template
├── bin
├── components
│   ├── button
│   └── input
├── site
├── utils
```
上面的管理方式固然简单，但是当我们的组件库生态日益庞大，站点、工具、cli、模板、基于组件的二创等物料不断增长后，整个项目的代码和依赖管理也会变得复杂和冗余。
那么对于上述这种多`project`的项目，`monorepo`便成为了我们的选择。
`base-doc`提供的模板方案，正是基于这一背景而开发。

## 什么是`base-doc`

`base-doc`使用`rush`进行项目的管理，预期包含组件库站点、组件库、组件库工具、组件库命令行、组件库模板、组件库社区、组件库物料场景等组件库多生态的前端解决方案。

## 如何使用`base-doc`

1. 全局安装`pnpm`、`rush`
2. 克隆项目: `git clone https://github.com/koloer-blus/base-doc.git`
3. 进入项目`cd base-doc`
4. 执行 `rush update` 进行项目依赖安装

## 了解更多

[rush](https://rushjs.io/)
[MDX](https://mdxjs.com/docs/)
