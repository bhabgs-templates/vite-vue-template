import { RouteRecordRaw, RouterView } from 'vue-router';
import Index from '@/views/index';

const routers: RouteRecordRaw = {
  path: '/mkq',
  component: RouterView,
  redirect: 'mns',
  children: [
    {
      path: ':model',
      component: Index,
    },
  ],
};

export default routers;
