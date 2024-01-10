import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: 'chat', component: () => import('./components/Chat.vue') },
      { path: 'leaderboard', component: () => import('./components/Leaderboard.vue') },
    ],
  },
  { path: '/login', component: () => import('./components/Login.vue') },
];

const router = new VueRouter({
  routes,
});

export default router;
