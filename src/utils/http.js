import axios from 'axios';
import store from '@/store';
import {
  TOGGLE_LOADING
} from '@/store/mutation-types';

const httpConfig = {
  baseURL: '//localhost:9999'
};

const httpInstance = axios.create(httpConfig);

httpInstance.interceptors.request.use((config) => {
  store.commit(TOGGLE_LOADING, true);
  return config;
}, (error) => {
  store.commit(TOGGLE_LOADING, false);
  return Promise.reject(error);
});

httpInstance.interceptors.response.use((response) => {
  store.commit(TOGGLE_LOADING, false);
  return response.data;
}, (error) => {
  store.commit(TOGGLE_LOADING, false);
  return Promise.reject(error);
});

export const http = httpInstance;
