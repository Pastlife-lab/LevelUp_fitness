import {defineStore} from 'pinia';
import {ref, computed, watch} from 'vue';

export const useQuestStore = defineStore('quest', () => {
  // --- STATE ---
  const totalXP = ref(Number(localStorage.getItem('fitness_xp')) || 0)
  const quests = ref(JSON.parse(localStorage.getItem('fitness_quests') || '[]'))

  // --- GETTERS (Computed) ---
  const currentLevel = computed(() => Math.floor(totalXP.value / 100) + 1)
  const progress = computed(() => totalXP.value % 100)})

  // --- ACTIONS (functions) ---
  function addQuest(title: string, xp: number) {
    quests.value.push({ 
    title, 
    xp, 
    completed: false 
     })
  }

  function completeQuest(id: number) {
    const quest = quests.value.find(q => q.id === id)
        if (quest && !quest.completed) {
      quest.completed = true
      totalXP.value += quest.xp
    }
  }

  function deleteQuest(id: number) {
    quests.value = quests.value.filter(q => q.id !== id)
  }

  // Auto-lagting til LocalStorage ved endring

  watch([totalXP, questes] () => {
    localStorage.setItem('fitness_xp', totalXP.value.toString())
    localStorage.setItem('fitness_quests', JSON.stringify(quests.value))
  }, { deep: true }

 return {
  totalXP,
  quests,
  currentLevel,
  progress,
  addQuest,
  completeQuest,
  deleteQuest
})