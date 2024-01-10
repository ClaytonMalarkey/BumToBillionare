<template>
    <div>
      <h2>Leaderboard</h2>
      <ol>
        <li v-for="player in leaderboard" :key="player.id">{{ player.name }} - {{ player.score }}</li>
      </ol>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      leaderboard() {
        return this.$store.state.leaderboard;
      },
    },
    mounted() {
      this.$store.dispatch('fetchLeaderboard');
    },
  };
  </script>
  