import axios from 'axios';

const apiClient = axios.create({
  //baseURL: process.env.VUE_APP_API_BASE_URL,
  baseURL: 'https://localhost:7138/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;