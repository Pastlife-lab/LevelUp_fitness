<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  totalXP: {
    type: Number,
    default: 0
  }
});

const level = computed(() => {
  return Math.floor(props.totalXP / 100) + 1;
});

const progress = computed(() => {
    return props.totalXP % 100;
});

const xpRemaining = computed(() => {
    return 100 - progress.value;
});
</script>

<template>
  <div class="status-bar">
    <div class="header">
      <h2>Level {{ level }}</h2>
      <span>{{ totalXP }} total XP</span>
    </div>

    <div class="track">
      <div 
        class="fill" 
        :style="{ width: progress + '%' }"
      >
        <span v-if="progress > 15">{{ progress }}%</span>
      </div>
    </div>

    <p class="footer">Du trenger {{ xpRemaining }} XP til neste nivå!</p>
  </div>
</template>

<style scoped>
.status-bar {
  background: #1e293b;
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

h2 {
  margin: 0;
  color: #fbbf24; /* Gullfarge for Level */
}

.track {
  background: #334155;
  height: 25px;
  border-radius: 50px;
  overflow: hidden; /* Sikrer at fill holder seg inni */
  border: 2px solid #475569;
}

.fill {
  background: linear-gradient(90deg, #10b981, #34d399); /* Grønn gradient */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  transition: width 0.5s ease-out; /* Gjør at baren animeres glatt! */
}

.footer {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #94a3b8;
  text-align: center;
}
</style>