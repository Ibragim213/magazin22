import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/mainPage/mainPage.vue'
import DeliveryPayment from '../pages/mainPage/DeliveryPayment.vue'

import TovarPayment from '@/pages/mainPage/TovarPayment.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/oplata',
    name: 'DeliveryPage',
    component: DeliveryPayment,
  },
  {
    path: '/tovar',
    name: 'TovarPagee',
    component: TovarPayment, // Новый маршрут
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
