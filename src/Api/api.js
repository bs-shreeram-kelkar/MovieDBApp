// api.js
import axios from 'axios';

// API key for The Movie Database (TMDB)
const API_KEY = '91efeff8f6ff9191bf267e7330a62bd0';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,  // Add the API key as a default parameter
  },
});

// Add an interceptor to include the API key in every request
api.interceptors.request.use(
  (config) => {
    // Ensure the API key is added to each request
    config.params = {
      ...config.params,
      api_key: API_KEY,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
