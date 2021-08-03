/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */
// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-alert': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-unused-vars': 'off',
    'no-var': 'warn',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-param-reassign': 'off',
    'next-line': 'off',
    'vue/html-closing-bracket-newline': 'warn',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-unused-vars-experimental': 'warn',
    'prefer-const': 'error',
    'no-plusplus': 'off',
    'no-new': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
});
