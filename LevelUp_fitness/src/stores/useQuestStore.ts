import {defineStore} from 'pinia';
import {ref, computed, watch} from 'vue';

type Quest = {
  id: number
  title: string
  xp: number
  completed: boolean
}

const username = ref(localStorage.getItem('fitness_user') || 'Jon Fredrik');

export const useQuestStore = defineStore('quest', () => {
  // --- STATE ---
  const totalXP = ref(Number(localStorage.getItem('fitness_xp')) || 0)
  const quests = ref<Quest[]>(JSON.parse(localStorage.getItem('fitness_quests') || '[]'))

  // --- GETTERS (Computed) ---
  const currentLevel = computed(() => Math.floor(totalXP.value / 100) + 1)
  const progress = computed(() => totalXP.value % 100)

  // --- ACTIONS (functions) ---
  function addQuest(title: string, xp: number) {
    const nextId = quests.value.length ? Math.max(...quests.value.map(q => q.id)) + 1 : 1
    quests.value.push({
      id: nextId,
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
  watch([totalXP, quests], () => {
    localStorage.setItem('fitness_xp', totalXP.value.toString())
    localStorage.setItem('fitness_quests', JSON.stringify(quests.value))
    
  }, { deep: true })
  
  watch(username, (newVal) => {
    localStorage.setItem('fitness_user', newVal);
  });

  return {
    totalXP,
    quests,
    currentLevel,
    progress,
    addQuest,
    completeQuest,
    deleteQuest,
    username
  }
})