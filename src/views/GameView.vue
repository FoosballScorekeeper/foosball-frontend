<script setup lang="ts">

import {onMounted, onUnmounted, ref} from "vue";
import TeamPanel from "@/components/TeamPanel.vue";
import TimerPanel from "@/components/TimerPanel.vue";
import GameOverOverlay from "@/components/GameOverOverlay.vue";

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

const secondsElapsed = ref(0)
let timer: number

const isGameOver = ref(false)
const gameCompleted = ref(false)
const winningTeam = ref('')

function incrementScore(team: 'A' | 'B') {
  if (isGameOver.value) return
  const teamRef = team === 'A' ? teamA : teamB
  teamRef.value.score++
  checkWinner()
}

function decrementScore(team: 'A' | 'B') {
  const teamRef = team === 'A' ? teamA : teamB
  teamRef.value.score = Math.max(0, teamRef.value.score - 1)
}

function checkWinner() {
  if (teamA.value.score >= 5) {
    winningTeam.value = teamA.value.name
    isGameOver.value = true
  }
  if (teamB.value.score >= 5) {
    winningTeam.value = teamB.value.name
    isGameOver.value = true
  }
}

function fixScore() {
  isGameOver.value = false
}

function completeGame() {
  gameCompleted.value = true
}

function switchSides() {

}

onMounted(() => {
  timer = setInterval(() => {
    secondsElapsed.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <TimerPanel :seconds="secondsElapsed" />
  <TeamPanel
      :team-name="teamA.name"
      :players="teamA.players"
      :score="teamA.score"
      @increment="incrementScore('A')"
      @decrement="decrementScore('A')"
  />
  <TeamPanel
      :team-name="teamB.name"
      :players="teamB.players"
      :score="teamB.score"
      @increment="incrementScore('B')"
      @decrement="decrementScore('B')"
  />

  <GameOverOverlay
      v-if="isGameOver && !gameCompleted"
      :winner="winningTeam"
      @fix-score="fixScore"
      @switch-sides="switchSides"
      @complete-game="completeGame"
  />
</template>

<style scoped>

</style>