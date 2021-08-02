import { createApp } from 'vue';
import VConsole from 'vconsole';
import lay from '@/layout';
import store from '@/config/global';
const app = createApp(lay);

const vConsole = new VConsole();

app.use(store).mount('#app');
