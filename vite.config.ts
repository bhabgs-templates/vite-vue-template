import { defineConfig } from 'vite';
import plugins from './build/vite/plugins';
import css from './build/vite/css';
import proxy from './build/vite/proxy';
import { pathResolve } from './build/utils';

const NODE_ENV =
  process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
    ? 'development'
    : 'any';

export default defineConfig(() => ({
  base: NODE_ENV === 'development' ? '' : '/tp_test/',
  envDir: pathResolve('env'),
  plugins: plugins(),
  css: css(),
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '-': pathResolve(''),
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: proxy(),
  },
}));
