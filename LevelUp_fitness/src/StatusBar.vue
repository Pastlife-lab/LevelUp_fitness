<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  totalXP: number;
  currentLevel: number;
}>();

const currentProgress = computed(() => props.totalXP % 100);
const progress = computed(() => Math.round((currentProgress.value / 100) * 100));
const xpRemaining = computed(() => 100 - currentProgress.value);
</script>

<template>
  <div class="status-bar">
    <div class="header">
      <div>
        <h2>Nivå {{ props.currentLevel }}</h2>
        <p>{{ props.totalXP }} XP totalt</p>
      </div>
      <div class="progress-text">{{ progress }}%</div>
    </div>

    <div class="track">
      <div class="fill" :style="{ width: progress + '%' }"></div>
    </div>

    <p class="footer">Du trenger {{ xpRemaining }} XP til neste nivå!</p>
  </div>
</template>

<style scoped>
.status-bar {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-text {
  font-weight: 700;
}

.track {
  height: 1rem;
  width: 100%;
  background: #d9d9d9;
  border-radius: 999px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: #4caf50;
  transition: width 0.3s ease;
}

.footer {
  margin: 0;
  font-size: 0.95rem;
  color: #555;
}
</style>