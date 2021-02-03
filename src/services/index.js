import axios from 'axios';

import { getToken } from '@/helpers.js';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_DEV_API,
})

axiosInstance.interceptors.request.use(
  function(config){
    const token = getToken();
    if(token){
      config.headers.Authorization ='Bearer '+ token;
    }

    return config;
  },
  function(error){
    return Promise.reject(error);
  }
);

const api = {
  get(endpoint, headers = {}) {
    return axiosInstance.get(endpoint, {
      headers: {
        ...headers,
        'APP_KEY': process.env.VUE_APP_APP_KEY
      }
    })
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body)
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body)
  },
  delete(endpoint, body) {
    return axiosInstance.delete(endpoint, body)
  }
}

export default api;