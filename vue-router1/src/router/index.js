import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemones',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'pokemon',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: '/:patchMatch(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
