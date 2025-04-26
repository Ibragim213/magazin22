import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/mainPage/mainPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
