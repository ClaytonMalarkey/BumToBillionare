<template>
  <div id="app">
    <h1>Bum to Billionaire App</h1>
    <div v-if="users.length">
      <h2>Leaderboard</h2>
      <ul>
        <li v-for="(user, index) in users" :key="index">
          {{ index + 1 }}. {{ user.username }} - {{ user.score }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await this.$axios.get('http://localhost:5000/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
  