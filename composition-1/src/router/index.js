import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/old-counter',
      name: 'oldCounter',
      component: () => import('../views/OldCounterView.vue')
    },
    {
      path: '/contador-hook',
      name: 'ContadorHooks',
      component: () => import('../views/Contador.vue')
    },
    {
      path: '/paises',
      name: 'Paises',
      component: () => import('../views/Paises.vue')
    },
    {
      /* Estos props se estan mandando a Paises.vue */
      path: '/paises/:nombre',
      name: 'Pais',
      props: true,
      component: () => import('../views/Pais.vue')
    }
  ]
})

export default router
