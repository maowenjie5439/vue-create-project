import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  { path: '/login', component: () => import('@/views/login/index.vue'), name: 'login' },
  { path: '/', component: () => import('@/views/home/index.vue'), name: 'home', alias: '/home' },
  { path: '/404', component: () => import('@/views/404/index.vue'), name: '404' },
  { path: '/:pathMatch(.*)*', name: '', redirect: '/404' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
