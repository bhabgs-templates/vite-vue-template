# Vue 3 + Typescript(tsx) + Vite

> 一下是工程描述，开发时请认真阅读

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

## 开始

### 第一步

> 安装依赖`yarn` or `npm i`

### 第二步 [husky 文档](https://typicode.github.io/husky/#/?id=create-a-hook)

> 1. 创建 husky 拦截，`npx husky install`
> 2. 创建 commit-msg 拦截, `yarn commit:create-msg-lint `
