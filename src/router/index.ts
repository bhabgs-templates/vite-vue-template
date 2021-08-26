import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import login from '@/views/login';
import Index from './routes';
import mmkq from './routes/mkq';

const routes: Array<RouteRecordRaw> = [
  Index,
  mmkq,
  { path: '/login', meta: { name: '登录', hideMenu: true }, component: login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
