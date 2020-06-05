import Vue from 'vue';
import router from './router';
import App from './App';
import * as CONFIG from './config';
import { http, filters } from './utils';
import './assets/scss';

window.$http = http;
window.CONFIG =  CONFIG;

Vue.use(filters);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
