import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import QuestView from '../views/QuestView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: DashboardView },
    { path: '/quests', name: 'quests', component: QuestView },
    { 
      path: '/stats', 
      name: 'stats', 
      component: () => import('../views/StatsView.vue') // Lazy loading (pluss i boka!)
    }
  ]
})

export default router