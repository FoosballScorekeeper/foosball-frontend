<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ seconds: number }>()

const formattedTime = computed(() => {
  const minutes = Math.floor(props.seconds / 60)
  const seconds = props.seconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
})
</script>

<template>
  <div class="text-2xl font-mono">
    {{ formattedTime }}
  </div>
</template>

<style lang="scss" scoped>

</style>