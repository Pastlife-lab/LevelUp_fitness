<script setup lang="ts">
const props = defineProps<{
  totalXP: number;
  currentLevel: number;
}>();
</script>

<template>
  <div class="status-bar">
    <p>Din XP: {{ totalXP }}</p>
    <p>Nivå: {{ currentLevel }}</p>
  </div>
</template>

<style scoped>
.status-bar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>