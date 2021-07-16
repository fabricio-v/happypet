import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  // baseURL: 'http://localhost:3333'
  baseURL: 'http://ec2-52-67-56-10.sa-east-1.compute.amazonaws.com:8080',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;