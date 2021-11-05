import { App } from 'vue';
// import VConsole from 'vconsole';
import vitevui from 'vitevui';
import vitevuu from 'vitevuu';
import router from '@/router';
import 'vitevui/lib/style.css';
import '@/assets/styles/index.less';

export default (app: App): void => {
  app.config.globalProperties.$vitevuu = vitevuu;
  app.use(vitevui).use(router);
  // new VConsole();
};
