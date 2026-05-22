<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['add-quest']);

const title = ref('');
const selectedXP = ref(20);

// Alternativer for XP
const xpOptions = [
  { label: 'Enkel', value: 10, icon: '🏃' },
  { label: 'Middels', value: 20, icon: '💪' },
  { label: 'Hard', value: 50, icon: '🔥' },
  { label: 'Epic', value: 100, icon: '🏆' }
];

const submitForm = () => {
  if (title.value.trim() === '') return;

  emit('add-quest', {
    title: title.value,
    xp: selectedXP.value
  });

  // Nullstill feltet og sett fokus tilbake
  title.value = '';
};
</script>

<template>
  <div class="card quest-form">
    <h3><i class="fa-solid fa-scroll"></i> Ny Økt </h3>
    
    <div class="input-group">
      <input 
        v-model="title" 
        type="text" 
        placeholder="Hva skal du mestre i dag?" 
        @keyup.enter="submitForm"
      />
    </div>

    <div class="xp-selector">
      <p>Velg vanskelighetsgrad:</p>
      <div class="chips">
        <button 
          v-for="option in xpOptions" 
          :key="option.value"
          type="button"
          :class="['chip', { active: selectedXP === option.value }]"
          @click="selectedXP = option.value"
        >
          <span class="icon">{{ option.icon }}</span>
          <span class="label">{{ option.label }}</span>
        </button>
      </div>
    </div>

    <button 
      class="btn-add" 
      :disabled="!title.trim()" 
      @click="submitForm"
    >
      Start Quest
    </button>
  </div>
</template>

<style scoped>
.quest-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

h3 { margin: 0; color: var(--accent-gold); font-size: 1.2rem; }

input {
  width: 100%;
  padding: 12px;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid #334155;
  border-radius: 8px;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

input:focus { border-color: var(--accent-gold); }

.xp-selector p {
  margin: 0 0 10px 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.chips {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.chip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background: #334155;
  border: 2px solid transparent;
  color: white;
  border-radius: 8px;
}

.chip.active {
  background: rgba(251, 191, 36, 0.1);
  border-color: var(--accent-gold);
  color: var(--accent-gold);
}

.btn-add {
  background: var(--accent-gold);
  color: #1e293b;
  padding: 14px;
  font-size: 1rem;
  border-radius: 8px;
}

.btn-add:disabled {
  background: #475569;
  cursor: not-allowed;
  opacity: 0.5;
}
</style>