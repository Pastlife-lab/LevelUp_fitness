<script setup lang="ts">
import { computed } from 'vue'
import { useQuestStore } from '../stores/useQuestStore'

type WithTimestamp = { timestamp?: number }

const store = useQuestStore()

const completedQuests = computed(() => store.quests.filter(q => q.completed))

const sortedCompletedQuests = computed(() => {
  return [...completedQuests.value].sort((a, b) => ((b as WithTimestamp).timestamp ?? 0) - ((a as WithTimestamp).timestamp ?? 0))
})
</script>

<template>
  <div class="history-page">
    <header class="history-header">
      <h1><i class="fa-solid fa-clock-rotate-left"></i> Treningslogg</h1>
      <p>Her er alle dine fullførte bragder.</p>
    </header>

    <div v-if="sortedCompletedQuests.length === 0" class="empty-log">
      <p>Loggen er tom. Utfør din første quest for å skape historie!</p>
      <RouterLink to="/quests" class="link">Gå til oppdrag ⚔️</RouterLink>
    </div>

    <div v-else class="history-list">
      <div 
        v-for="q in sortedCompletedQuests" 
        :key="q.id" 
        class="history-card"
      >
        <div class="status-icon">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="info">
          <h3>{{ q.title }}</h3>
          <span>Fullført • <strong>+{{ q.xp }} XP</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.history-header h1 {
  color: var(--accent-green);
  margin: 0;
}

.empty-log {
  text-align: center;
  padding: 3rem;
  background: var(--card-bg);
  border-radius: 12px;
  border: 2px dashed #334155;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.history-card {
  background: var(--card-bg);
  padding: 1.2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-left: 5px solid var(--accent-green);
  transition: transform 0.2s;
}

.history-card:hover {
  transform: scale(1.02);
}

.status-icon {
  color: var(--accent-green);
  font-size: 1.5rem;
}

.info h3 {
  margin: 0;
  font-size: 1.1rem;
}

.info span {
  font-size: 0.9rem;
  color: var(--text-muted);
}
</style>