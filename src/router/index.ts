import { createRouter, createWebHistory } from 'vue-router'
import Jobs from '@/views/Jobs.vue'
import Job from '@/views/Job.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'jobs'
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: Job
    }
  ]
})

export default router
