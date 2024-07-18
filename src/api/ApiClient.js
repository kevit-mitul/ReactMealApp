import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// apiClient.interceptors.response.use(
//    response => response,
//    error => {
//      console.error('API call failed:', error);
//      // Handle specific error cases
//      if (error.response.status === 401) {
//        // Unauthorized
//      } else if (error.response.status === 404) {
//        // Not found
//      }
//      return Promise.reject(error);
//    }
// );
//
// apiClient.interceptors.request.use(
//    config => {
//      // Add authorization token to every request
//      const token = localStorage.getItem('token');
//      if (token) {
//        config.headers.Authorization = `Bearer ${token}`;
//      }
//      return config;
//    },
//    error => Promise.reject(error)
// );

export default apiClient;
