import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import * as CONFIG from './config';
import { http, filters, directives } from './utils';
import './assets/scss';

window.$http = http;
window.CONFIG = CONFIG;

Vue.use(filters);
Vue.use(directives);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
});
