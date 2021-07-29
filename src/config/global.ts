import { App } from 'vue';
import Store from '@/config/install';

export default (app: App): void => {
  app.config.globalProperties.$store = Store;
};
