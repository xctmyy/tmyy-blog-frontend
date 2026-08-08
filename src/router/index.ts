import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/desktop',
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: () => import('../views/DesktopPage.vue'),
    },
  ],
})

export default router
