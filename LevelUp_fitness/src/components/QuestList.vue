<script setup lang="ts">



const props = defineProps<{
  quests: Array<{ id: number; title: string; xp: number; completed: boolean }>;
}>();


const emit = defineEmits<{  
  complete: [id: number];
  delete: [id: number];
}>();

const handleComplete = (id: number) => {
  emit('complete', id);
};

const handleDelete = (id: number) => {
  emit('delete', id);
};
</script>

<template>
  <div class="quest-list">
    <h3>Dine Quests</h3>
    <ul>
      <li v-for="quest in props.quests" :key="quest.id" :class="{ completed: quest.completed }">
        <span>{{ quest.title }} - {{ quest.xp }} XP</span>
        <div>
          <button v-if="!quest.completed" @click="handleComplete(quest.id)">Fullfør</button>
          <span v-else class="completed-label">Fullført</span>
          <button class="delete-btn" @click="handleDelete(quest.id)">Slett</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.quest-list {
  margin-top: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  background: #fff;

}

.completed {
  text-decoration: line-through;
  color: #888;
}

button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #45a049;
}

.completed-label {
  color: #555;
  font-weight: 600;
}

.delete-btn {
  background: transparent;
  border: 1px solid #ef4444;
  color: #ef4444;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.2s;
}

.delete-btn:hover {
  background: #ef4444;
  color: white;
}

</style>