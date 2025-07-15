<script setup lang="ts">
defineProps<{
  teamName: string
  players: string[]
  score: number
}>()

defineEmits(['increment', 'decrement'])
</script>

<template>
  <div class="p-4 border rounded w-full">
    <h2 class="text-xl font-bold">{{ teamName }} ({{ score }})</h2>
    <div class="flex justify-center gap-4 my-2">
      <button @click="$emit('decrement')">-</button>
      <button @click="$emit('increment')">+</button>
    </div>
    <h3 class="text-lg">Players:</h3>
    <ul>
      <li v-for="player in players" :key="player">{{ player }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
button {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
}
</style>