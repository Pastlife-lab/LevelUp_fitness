<script setup lang="ts">

import { ref, computed } from 'vue';

// Brukerens nåværende nivå og XP
const totalXP = ref(0);

// Eksempel på quests med XP-belønninger, for enkel start for trening
const quests = ref([
  {id: 1, title: 'Løping Interval 2min 30 sek, 30 sek gå', xp: 50, completed: false },
  {id: 2, title: 'Squats 4 sett x 10 repetisjoner', xp: 30, completed: false },
  {id: 3, title: 'Planke 4 sett x 30 sekunder', xp: 20, completed: false },
  {id: 4, title: 'Push-ups 4 sett x 10 repetisjoner', xp: 25, completed: false },
  {id: 5, title: 'Utfall 4 sett x 10 repetisjoner per ben', xp: 30, completed: false },
  {id: 6, title: 'Nedtrekk 4 sett x 10 repetisjoner', xp: 30, completed: false },
  {id: 7, title: 'Biceps curls 4 sett x 10 repetisjoner', xp: 20, completed: false },
]);

// logikk og funksjoner for å fullføre quests og oppdatere XP
// ignorer feilbeskjed
const currentLevel = computed(() => {
  return math.floor(totalXP.value / 100) + 1;
});
// ignorer feilbeskjed *denne er for når quest er fullført* 
const CompletedQuest = (id) => {
  const quest = quests.value.find(q => q.id === id);
    if (quest && !quest.completed) {
      quest.completed = true;
      titalXP.value += quest.xp
    }
};

// ignorer feilbeskjed
const addNewQuest = (newQuestData) => {
  const newObj = {
    id: Date.now(), // enkel unik for og tracke 
    title: newQuestData.title,
    xp: newQuestData.xp,
    completed: false
  };
};

</script>
<template>
  <div class="app">
    <h1>LevelUp Fitness</h1>
    <p>Status: Level {{ currentLevel }} ({{ totalXP }} XP)</p>
    
    <hr>
    
    <ul>
      <li v-for="quest in quests" :key="quest.id">
        {{ quest.title }} - {{ quest.xp }} XP 
        <button @click="completeQuest(quest.id)" :disabled="quest.completed">
          {{ quest.completed ? 'Fullført!' : 'Fullfør' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
