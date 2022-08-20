import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import NotFound from './components/404NotFound.vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import Ayat from './components/Ayat.vue';
import {createRouter, createWebHistory} from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const About = { template: '<div>About</div>' }

const routes = [
  {path: '/', component: Home},
  {path: '/surah/:id', component: Ayat},
  {path: '/:catchAll(.*)', component: NotFound},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
.use(BootstrapVue3)
.use(router)
.mount('#app')
