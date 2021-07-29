import { defineConfig } from 'vite';
import plugins from './build/vite/plugins';
import css from './build/vite/css';
import proxy from './build/vite/proxy';
import { pathResolve } from './build/utils';

export default defineConfig(() => ({
  base: '/equipment/',
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
