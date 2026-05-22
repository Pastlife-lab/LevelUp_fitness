import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../view/DashboardView.vue'
import QuestView from '../view/QuestView.vue'
import ProfileView from '../view/ProfileView.vue'
import HistoryView from '../view/HistoryView.vue'

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/quests',
      name: 'quests',
      component: QuestView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    }
  ]
})

export default router

<style>
  
</style>