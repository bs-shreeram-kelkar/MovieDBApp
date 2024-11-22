import database from ".";

export const getAllMovies = async () => {
  try {
    // Querying the 'movies' collection
    const moviesCollection = database.collections.get('movies');
    
    // Fetching all movies from the collection
    const allMovies = await moviesCollection.query().fetch();
    
    // Return the fetched movies
    return allMovies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
