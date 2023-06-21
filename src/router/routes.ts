import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: () => import('@/views/SingleUser.vue')
  },
  {
    path: '/:id',
    component: () => import('@/views/SingleUser.vue')
  }
]
