import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import LocationsPage from '@/views/LocationsPage.vue'
import EpisodesPage from '@/views/EpisodesPage.vue'
import CharactersPage from '@/views/CharactersPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/episodes', component: EpisodesPage },
    { path: '/mainpage', component: MainPage },
    { path: '/characters', component: CharactersPage},
    { path: '/locations', component: LocationsPage },
    { path: '/episodes', component: EpisodesPage },
    { path: '/', redirect: '/mainpage' }
  ]
})

export default router
