import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'map', component: () => import('pages/Map.vue')},
      { path: 'timer', component: () => import('components/Timer.vue')},
  ]}]

 export default routes
