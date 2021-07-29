import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    eslintPlugin({
      eslintOptions: {
        cache: false,
      },
    }),
  ],
  resolve: {
    alias: {
      // 配置别名
      '@': path.resolve(__dirname, './src'),
    },
  },
});
