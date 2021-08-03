import { Plugin } from 'vite';
// import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default () => {
  const pluginList: (Plugin | Plugin[])[] = [
    // vue(),
    vueJsx({ optimize: true }),
    eslintPlugin({
      eslintOptions: {
        cache: false,
      },
      // shouldLint:(path: string) => path.match(/\.*.([jt]s?x|vue)?$/)
    }),
  ];

  return pluginList;
};
