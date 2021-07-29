import { createApp } from 'vue';
import lay from '@/layout';
import store from '@/config/global';
const app = createApp(lay);

app.use(store).mount('#app');
