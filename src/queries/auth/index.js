// Import axios
import axios from 'axios';

// Fetch the root URL from environment variables
const rootURL = `https://weather-api-backend-inky.vercel.app/api/v1`;

// Create an Axios instance with the base URL and default headers
export const instance = axios.create({
  baseURL: rootURL,
  headers: {
    accept: 'application/json',
  },
});

// Optionally configure the token if present in local storage
// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('authToken'); // Assumes token is stored under 'authToken'
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// });
