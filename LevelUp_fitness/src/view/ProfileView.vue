<script setup lang="ts">
import { useQuestStore } from '../stores/useQuestStore'

const store = useQuestStore()
</script>

<template>
  <div class="card profile-page">
    <div class="avatar-circle">
      {{ store.username.charAt(0).toUpperCase() }}
    </div>
    
    <h2>Din Profil</h2>
    
    <div class="settings-group">
      <label>Utøver:</label>
      <input 
        v-model="store.username" 
        type="text" 
        placeholder="Skriv ditt navn..."
      />
    </div>

    <div class="achievements-preview">
      <h3>Stats-oppsummering</h3>
      <p>Nivå: <strong>{{ store.currentLevel }}</strong></p>
      <p>Total XP: <strong>{{ store.totalXP }}</strong></p>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.avatar-circle {
  width: 100px;
  height: 100px;
  background: var(--accent-gold);
  color: var(--bg-dark);
  font-size: 3rem;
  font-weight: bold;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 4px solid #334155;
}

.settings-group {
  width: 100%;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-muted);
}

input {
  width: 100%;
  padding: 12px;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid #334155;
  border-radius: 8px;
  color: rgb(0, 0, 0);
  font-size: 1.1rem;
}

.achievements-preview {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #334155;
}
</style>