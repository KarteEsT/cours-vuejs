import ListView from '@/views/ListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView,
    },
    {
      path: '/new',
      name: 'create',
      component: () => import('@/views/CreateView.vue'),
    },
  ],
})

export default router
