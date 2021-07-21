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

## 提价 commit 分为遗下六步 （英文版）

1. Select the type of change that you're committing 选择改动类型 (<type>)

2. What is the scope of this change (e.g. component or file name)? 填写改动范围 (<scope>)

3. Write a short, imperative tense description of the change: 写一个精简的描述 (<subject>)

4. Provide a longer description of the change: (press enter to skip) 对于改动写一段长描述 (<body>)

5. Are there any breaking changes? (y/n) 是破坏性修改吗？默认 n (<footer>)

6. Does this change affect any openreve issues? (y/n) 改动修复了哪个问题？默认 n (<footer>)
