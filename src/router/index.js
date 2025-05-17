// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/mainPage/mainPage.vue'
import DeliveryPayment from '../pages/mainPage/DeliveryPayment.vue'
import TovarPayment from '@/pages/mainPage/TovarPayment.vue'
import Favorites from '@/pages/mainPage/Favorites.vue'
import CartPage from '@/pages/mainPage/CartPage.vue'
import ContactPage from '@/pages/mainPage/ContactPage.vue'
import ProductDetail from '@/pages/mainPage/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { title: 'Главная' },
  },
  {
    path: '/oplata',
    name: 'DeliveryPage',
    component: DeliveryPayment,
    meta: { title: 'Доставка и оплата' },
  },
  {
    path: '/tovar',
    name: 'TovarPage',
    component: TovarPayment,
    meta: { title: 'Товары' },
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    meta: { title: 'Избранное' },
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
    meta: { title: 'Корзина' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: { title: 'Контакты' },
  },
  {
    path: '/product/:id', // Обновленный путь с параметром id
    name: 'ProductDetail',
    component: ProductDetail,
    meta: { title: 'Продукт' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// Динамическое изменение заголовка страницы
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Магазин плюшевых мишек'
  next()
})

export default router
