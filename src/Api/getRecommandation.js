// apiFunctions.js
import api from './api';  // Assuming your axios instance is in api.js

// Function to get popular movies
export const getRecommandation = async (id) => {
  try {
    const url = '/movie/' + id + "/recommendations"
    const response = await api.get(url, {
      params: {
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