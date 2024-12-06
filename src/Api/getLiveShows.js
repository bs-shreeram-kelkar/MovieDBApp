import api from './api';  // Assuming your axios instance is in api.js

// Function to get popular movies
export const getLiveShows = async (page: 1) => {
  try {
    let url = 'tv/airing_today'
    const response = await api.get(url, {
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