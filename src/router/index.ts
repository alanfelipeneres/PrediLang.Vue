import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TemplateView from '../views/TemplateView.vue'
import CenarioView from '../views/CenarioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/template',
      name: 'template',
      component: TemplateView
    },
    {
      path: '/cenario',
      name: 'cenario',
      component: CenarioView
    }
  ]
})

export default router
