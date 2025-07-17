<script setup lang="ts">
defineProps<{ winner: string }>()
defineEmits(['fix-score', 'switch-sides', 'complete-game'])
</script>

<template>
  <div class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div class="bg-white p-8 rounded shadow text-center space-y-4">
      <h2 class="text-2xl font-bold">Game Over!</h2>
      <p>{{ winner }} Wins!</p>
      <div class="flex justify-center gap-4">
        <button @click="$emit('fix-score')">Fix Score</button>
        <button @click="$emit('switch-sides')">Switch Sides</button>
        <button @click="$emit('complete-game')">Complete Game</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>