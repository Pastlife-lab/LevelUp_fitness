<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['add-quest']);

// Lokale variabler for skjemaet
const title = ref('');
const xp = ref(20); // Standardverdi

const submitForm = () => {
  // Sjekk at tittel ikke er tom
  if (title.value.trim() === '') return;

  // Send dataene opp til App.vue
  emit('add-quest', {
    title: title.value,
    xp: Number(xp.value) // Sikre at det er et tall
  });

  // Tøm feltet etterpå
  title.value = '';
};
</script>

<template>
  <div class="quest-form">
    <h3>Legg til ny Quest</h3>
    
    <input 
      v-model="title" 
      type="text" 
      placeholder="Hva skal du trene?" 
    />

    <select v-model="xp">
      <option value="10">Easy (10 XP)</option>
      <option value="20">Medium (20 XP)</option>
      <option value="50">Hard (50 XP)</option>
      <option value="100">Epic (100 XP)</option>
    </select>

    <button @click="submitForm">Legg til</button>
  </div>
</template>

<style scoped>
    .quest-form {
        background: #f4f4f4;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 2rem;
}
    input, select, button {
        margin: 5px;
        padding: 8px;
}
</style>