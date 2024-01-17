<template>
  <div id="app">
    <h1>Bum to Billionaire App</h1>
    <div v-if="loggedIn">
      <h2>Welcome, {{ username }}!</h2>
      <button @click="logout">Logout</button>
      <h3>Your Score: {{ userScore }}</h3>
    </div>
    <div v-else>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label for="regUsername">Username:</label>
        <input type="text" id="regUsername" v-model="regUsername" required>
        <label for="regPassword">Password:</label>
        <input type="password" id="regPassword" v-model="regPassword" required>
        <button type="submit">Register</button>
      </form>

      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="loginUsername">Username:</label>
        <input type="text" id="loginUsername" v-model="loginUsername" required>
        <label for="loginPassword">Password:</label>
        <input type="password" id="loginPassword" v-model="loginPassword" required>
        <button type="submit">Login</button>
      </form>
    </div>

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
      regUsername: '',
      regPassword: '',
      loginUsername: '',
      loginPassword: '',
      loggedIn: false,
      username: '',
      userScore: 0,
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
    async register() {
      try {
        await this.$axios.post('http://localhost:5000/register', {
          username: this.regUsername,
          password: this.regPassword,
        });
        this.regUsername = '';
        this.regPassword = '';
        alert('Registration successful. Please log in.');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    },
    async login() {
      try {
        const response = await this.$axios.post('http://localhost:5000/login', {
          username: this.loginUsername,
          password: this.loginPassword,
        });
        this.loggedIn = true;
        this.username = this.loginUsername;
        this.userScore = response.data.user_id; // Replace with actual user score
        this.loginUsername = '';
        this.loginPassword = '';
        alert('Login successful.');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    logout() {
      this.loggedIn = false;
      this.username = '';
      this.userScore = 0;
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

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

button {
  margin-top: 10px;
}
</style>
