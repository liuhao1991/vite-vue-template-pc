/*
 * @Author: lh@metgs.com
 * @Date: 2022-07-04 16:42:41
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2022-07-04 17:06:36
 * @Description: ...
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/Index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});

export default router;
