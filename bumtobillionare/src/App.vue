<template>
  <h1>APP !</h1>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = []

    const router = createRouter({
      history: createWebHashHistory(),
      routes,
  })

  const app = Vue.createApp({})
  app.use(router)

export default {
   

    
  // Add your app logic here
};
</script>
