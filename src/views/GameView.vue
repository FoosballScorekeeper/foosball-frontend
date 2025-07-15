<script setup lang="ts">

import {ref} from "vue";

const teamA = ref({
  name: 'Team Alpha',
  players: ['Alice', 'Bob'],
  score: 0,
})

const teamB = ref({
  name: 'Team Beta',
  players: ['Charlie', 'Dana'],
  score: 0,
})

import TeamPanel from "@/components/TeamPanel.vue";
</script>

<template>
<TeamPanel
    :team-name="teamA.name"
    :players="teamA.players"
    :score="teamA.score"
    @increment="teamA.score++"
    @decrement="teamA.score = Math.max(0, teamA.score - 1)"
/>
<TeamPanel
    :team-name="teamB.name"
    :players="teamB.players"
    :score="teamB.score"
    @increment="teamB.score++"
    @decrement="teamB.score = Math.max(0, teamB.score - 1)"
/>
</template>

<style scoped>

</style>