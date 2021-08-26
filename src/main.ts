import { createApp } from 'vue';
import lay from '@/layouts/Default';
import store from '@/config/global';
import { createDom } from '@/utils';

createDom('script');

const app = createApp(lay);
app.use(store).mount('#app');
