import database from '.';
import { Q } from '@nozbe/watermelondb'

export const isMoviePresent = async (movieId) => {
  try {
    const movieCollection = database.collections.get('movies');
    console.log(movieId)
    const existingMovie = await movieCollection.query(Q.where('id', movieId.toString())).fetch()
    console.log("bvbvb")
    console.log(existingMovie)
    console.log(existingMovie.length > 0)
    return (existingMovie.length > 0); // Returns true if movie exists, false otherwise
  } catch (error) {
    console.error('Error checking movie presence:', error);
    return false; // Default to false on error
  }
};

