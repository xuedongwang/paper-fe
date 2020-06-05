import axios from 'axios';

const config = {
  baseURL: '//localhost:9999'
};

const httpInstance = axios.create(config);

httpInstance.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
})

export {
  httpInstance as http
};
