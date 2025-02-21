import { createRouter, createWebHistory } from 'vue-router'
import JobsView from '@/views/JobsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'jobs',
      component: JobsView
    }
  ]
})

export default router
