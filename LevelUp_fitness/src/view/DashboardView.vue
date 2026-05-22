<script setup lang="ts">
import { computed } from 'vue'
import { useQuestStore } from '../stores/useQuestStore'
import StatusBar from '../components/StatusBar.vue'

const store = useQuestStore()

const completedCount = computed(() => 
  store.quests.filter(q => q.completed).length
)
</script>

<template>
  <div class="dashboard">
    <header class="welcome-header">
      <h1>Velkommen tilbake, {{ store.username }}!</h1>
      <p>Klar for å knuse flere mål i dag?</p>
    </header>

    <StatusBar :totalXP="store.totalXP" />

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-value">{{ store.quests.length }}</span>
        <span class="stat-label">Aktive Quests</span>
      </div>
      
      <div class="stat-card highlight">
        <span class="stat-value">{{ completedCount }}</span>
        <span class="stat-label">Fullførte Quests</span>
      </div>
    </div>

    <div class="cta-section">
      <RouterLink to="/quests" class="btn-primary">
        Gå til Quest Log ⚔️
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.welcome-header h1 {
  margin: 0;
  color: var(--accent-gold);
}

.welcome-header p {
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #334155;
}

.stat-card.highlight {
  border-color: var(--accent-green);
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-section {
  text-align: center;
  margin-top: 1rem;
}

.btn-primary {
  display: inline-block;
  background: var(--accent-gold);
  color: #1e293b;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: scale(1.05);
}
</style>