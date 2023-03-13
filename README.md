# base-doc

> Provide a template for building a component library ecology based on `monorepo`

## Background introduction

Most of the current component library technical solutions adopt a single package method, for example:

```bash
├── template
├── bin
├── components
│ ├── button
│ └── input
├── site
├── utils
```
The above management method is simple, but when our component library ecology grows larger and materials such as sites, tools, cli, templates, and component-based creations continue to grow, the code and dependency management of the entire project will also become complicated and redundant. Remain.
Then for the above-mentioned multiple `project` projects, `monorepo` has become our choice.
The template solution provided by `base-doc` was developed based on this background.

## What is `base-doc`

`base-doc` uses `rush` for project management, which is expected to include component library sites, component libraries, component library tools, component library command lines, component library templates, component library communities, component library material scenarios, etc. Front-end solutions.

## How to use `base-doc`

1. Install `pnpm`, `rush` globally
2. Clone the project: `git clone https://github.com/koloer-blus/base-doc.git`
3. Enter the project `cd base-doc`
4. Execute `rush update` to install project dependencies

## learn more

[rush](https://rushjs.io/)
[MDX](https://mdxjs.com/docs/)
