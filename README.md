# Vue 3 + Typescript(tsx) + Vite

> 以是工程描述，开发时请认真阅读
> `cz-customizable` 默认AngularJS 规范
> `commitlint-config-cz` 配合 ·`cz-customizable· 使用

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

## 说明

-  `vite.config.ts` 配置项抽离到 `build` 文件夹下 
-  `vite.config.ts` 以 `defineConfig` 接收函数的方式定义插件 方便不同mode设置不同配置
-  抽离到 `build` 文件夹下的配置也须要以导出函数的形势
-  `build` 下的plugins文件夹作用后台添加设置更多复杂或自定义vite插件使用
-  `.env` 文件放到 `env` 文件夹下 解决文件过多 分类不明确
-  运行 `npm commit` 来代替 `git commit` 提交之前首先验证 `eslint` 和 `stylelint` 代码检测 之后会验证commit格式是否复合所配置的标准 当全部验证通过后才会提交成功
-  集成了单元测试 根据需求选择是否使用 支持 `.js` `.ts` `.jsx` `.tsx` `.vue` 文件的测试