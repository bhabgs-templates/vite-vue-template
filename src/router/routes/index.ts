import { RouteRecordRaw, RouterView } from 'vue-router';
import Index from '@/views/index';

const routers: RouteRecordRaw = {
  path: '/',
  component: RouterView,
  redirect: '/model/mns',
  children: [
    {
      path: '/model/:model',
      component: Index,
    },
  ],
};

export default routers;
