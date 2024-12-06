// apiFunctions.js
import api from './api';  // Assuming your axios instance is in api.js

// Function to get popular movies
export const getMovies = async (page = 1) => {
  try {
    const response = await api.get('/discover/movie', {
      params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: page,
        sort_by: 'popularity.desc',
      },
      headers: {
        accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
