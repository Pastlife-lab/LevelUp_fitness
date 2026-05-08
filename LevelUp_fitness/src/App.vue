<script setup lang="ts">
import { ref, computed } from 'vue';
import StatusBar from './components/StatusBar.vue';
import QuestList from './components/QuestList.vue';
import QuestForm from './components/QuestForm.vue';


const addNewQuest = (data) => {
  const newObj = {
    id: Date.now(), // Lager en unik ID
    title: data.title,
    xp: data.xp,
    completed: false
  };
  
  // Dytter det nye objektet inn i den reaktive listen
  quests.value.push(newObj);
};

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
  return Math.floor(totalXP.value / 100) + 1;
});
// ignorer feilbeskjed *denne er for når quest er fullført* 
const handleComplete = (id: number) => {
  const quest = quests.value.find(q => q.id === id);
    if (quest && !quest.completed) {
      quest.completed = true;
      totalXP.value += quest.xp
    }
};

</script>

<template>
  <main>
    <h1>LevelUp Fitness</h1>
    <div class="container">
    <StatusBar :totalXP="totalXP" />
    
    <QuestForm @add-quest="addNewQuest" />
    <QuestList :quests="quests" @complete="handleComplete" />
  </div>
    <p>Din XP: {{ totalXP }}</p>

    <QuestForm @add-quest="addNewQuest" />

    <QuestList 
      :quests="quests" 
      @complete="handleComplete" 
    />
  
  
  </main>

<footer>
  
</footer>
</template>

<style scoped>

</style>
