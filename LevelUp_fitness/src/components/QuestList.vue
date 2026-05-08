<script setup lang="ts">
const props = defineProps<{
  quests: Array<{ id: number; title: string; xp: number; completed: boolean }>
}>();

const emit = defineEmits<{
  complete: [id: number]
}>();
</script>

<template>
  <div class="quest-list">
    <h3>Dine Quests</h3>
    <ul>
      <li v-for="quest in quests" :key="quest.id" :class="{ completed: quest.completed }">
        <span>{{ quest.title }} - {{ quest.xp }} XP</span>
        <button v-if="!quest.completed" @click="emit('complete', quest.id)">Fullfør</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.quest-list {
  margin-top: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;
  border-radius: 4px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #45a049;
}
</style>