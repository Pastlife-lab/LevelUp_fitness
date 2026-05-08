<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import StatusBar from './StatusBar.vue';
import QuestList from './components/QuestList.vue';
import QuestForm from './components/QuestForm.vue';

const totalXP = ref(0);
const showLevelUp = ref(false);

const currentLevel = computed(() => Math.floor(totalXP.value / 100) + 1);

watch(currentLevel, (newLevel, oldLevel) => {
  if (newLevel > oldLevel) {
    triggerLevelUp();
  }
});

const triggerLevelUp = () => {
  showLevelUp.value = true;
  
  // Skjul meldingen automatisk etter 3 sekunder
  setTimeout(() => {
    showLevelUp.value = false;
  }, 3000);
};

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
const handleComplete = (id: number) => {
  const quest = quests.value.find(q => q.id === id);
    if (quest && !quest.completed) {
      quest.completed = true;
      totalXP.value += quest.xp
    }
};
</script>


<template>
  <div class="container">
    <h1>LevelUp Fitness</h1>    
    
    <StatusBar :totalXP="totalXP" :currentLevel="currentLevel" />
    
    <QuestForm @add-quest="addNewQuest" />
    <QuestList :quests="quests" @complete="handleComplete" />
    <Transition name="bounce">
      <div v-if="showLevelUp" class="level-up-modal">
        <div class="content">
          <span class="icon">⭐</span>
          <h1>LEVEL UP!</h1>
          <p>Du har nådd nivå {{ currentLevel }}</p>
        </div>
      </div>
    </Transition>

    

  </div>
</template>


<style scoped>


.level-up-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  pointer-events: none; /* Så du ikke blokkerer klikk mens den animeres */
}

.content {
  background: #fbbf24;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 0 50px rgba(251, 191, 36, 0.5);
  border: 5px solid white;
}

.icon { font-size: 5rem; display: block; }
h1 { font-size: 3.5rem; margin: 0; color: #1e293b; }

/* VUE TRANSITION ANIMASJON */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.status-bar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>
