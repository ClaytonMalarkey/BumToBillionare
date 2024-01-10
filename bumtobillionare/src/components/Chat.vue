<template>
    <div>
      <h2>Chat</h2>
      <ul>
        <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
      </ul>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newMessage: '',
      };
    },
    computed: {
      messages() {
        return this.$store.state.chat.messages;
      },
    },
    methods: {
      sendMessage() {
        this.$store.dispatch('chat/sendMessage', this.newMessage);
        this.newMessage = '';
      },
    },
  };
  </script>
  