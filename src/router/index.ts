import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'
import FavoritesPage from '@/views/FavoritesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: LoginPage },
    { path: '/mainpage', component: MainPage },
    { path: '/favorites', component: FavoritesPage },
    { path: '/logout', component: LoginPage },
    { path: '/', redirect: '/login' },
  ]
})

export default router
