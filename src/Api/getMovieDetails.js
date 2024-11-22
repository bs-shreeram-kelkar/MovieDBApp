import api from './api';  // Assuming your axios instance is in api.js

// Function to get popular movies
export const getMovieDetails = async (id = 912649) => {
    const response = await api.post()
  try {
    let url = '/movie/' + id
    console.log(url)
    const response = await api.get('/movie/' + id, {
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