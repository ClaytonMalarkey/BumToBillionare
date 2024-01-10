import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    chat: {
      messages: [],
    },
    leaderboard: [],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_MESSAGES(state, messages) {
      state.chat.messages = messages;
    },
    SET_LEADERBOARD(state, leaderboard) {
      state.leaderboard = leaderboard;
    },
  },
  actions: {
    login({ commit }, credentials) {
      // Simulate login request
      axios.post('/api/login', credentials).then((response) => {
        commit('SET_USER', response.data.user);
      });
    },
    fetchMessages({ commit }) {
      // Simulate fetching chat messages
      axios.get('/api/messages').then((response) => {
        commit('SET_MESSAGES', response.data.messages);
      });
    },
    sendMessage({ dispatch }, message) {
      // Simulate sending a message
      axios.post('/api/messages', { text: message }).then(() => {
        dispatch('fetchMessages');
      });
    },
    fetchLeaderboard({ commit }) {
      // Simulate fetching leaderboard
      axios.get('/api/leaderboard').then((response) => {
        commit('SET_LEADERBOARD', response.data.leaderboard);
      });
    },
  },
});
