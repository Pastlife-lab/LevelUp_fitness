<script setup lang="ts">
import { useQuestStore } from '../stores/useQuestStore'
import QuestForm from '../components/QuestForm.vue'
import QuestList from '../components/QuestList.vue'

// Vi kobler oss på "skyen"
const store = useQuestStore()
</script>

<template>
  <div>
    <QuestForm @add-quest="(data) => store.addQuest(data.title, data.xp)" />
    
    <QuestList 
      :quests="store.quests" 
      @complete="store.completeQuest" 
      @delete="store.deleteQuest" 
    />
  </div>
</template>