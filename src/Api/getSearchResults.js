// apiFunctions.js
import api from './api';  // Assuming your axios instance is in api.js

// Function to get popular movies
export const getSearchResults = async (value) => {
  try {
    const url = '/search/movie'
    const response = await api.get(url, {
      params: {
        sort_by: 'popularity.desc',
        query: value,
      },
      headers: {
        accept: 'application/json',
      },
    });
    console.log("got success")
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};