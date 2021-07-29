# Vue 3 + Typescript(tsx) + Vite

> 以是工程描述，开发时请认真阅读

## 开始

### vite 安装

1. npx degit bhabgs-templates/vite-ts-template pn

### 第一步安装依赖

> 1. `yarn` or `npm i`
> 2. 全局安装 `yarn global add commitizen cz-conventional-changelog`

### 第二步 [husky 文档](https://typicode.github.io/husky/#/?id=create-a-hook)

> 1. 创建 husky 拦截，`npx husky install`
> 2. 创建 commit-msg 拦截, `yarn commit:create-msg-lint `

## 温馨提示

- [x] 请全局安装 `commitizen`、`cz-conventional-changelog`(核心 commit 提示文字)
- [x] 如想使用中文版本请安装 `cz-conventional-changelog-chinese` 并在 package 进行如下配置，英文版本不需要配置
  ```json
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog-chinese"
    }
  }
  ```

> 根目录下 `~/.czrc` 全局模式下，需要 ~/.czrc 配置文件, 为 commitizen 指定 Adapter

```json
{ "path": "cz-conventional-changelog" }
```
a