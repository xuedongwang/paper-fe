import axios from 'axios';
import store from '@/store';
import { TOGGLE_LOADING } from '@/store/mutation-types';

const config = {
  baseURL: '//localhost:9999'
};

const httpInstance = axios.create(config);

httpInstance.interceptors.request.use(function (config) {
  store.commit(TOGGLE_LOADING, true);
  return config;
}, function (error) {
  store.commit(TOGGLE_LOADING, false);
  return Promise.reject(error);
});

httpInstance.interceptors.response.use(response => {
  store.commit(TOGGLE_LOADING, false);
  return response.data;
}, error => {
  store.commit(TOGGLE_LOADING, false);
  return Promise.reject(error);
})

export {
  httpInstance as http
};
