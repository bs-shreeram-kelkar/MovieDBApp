import database from '.';
import { Q } from '@nozbe/watermelondb';

export const removeMovie = async (movieId) => {
  try {
    return await database.write(async () => {
      const movieCollection = database.collections.get('movies');
      const movieToRemove = await movieCollection.query(Q.where('id', movieId.toString())).fetch()
    //   const deleted = movieToRemove.map(movie => movie.markAsDeleted())
      await Promise.all(movieToRemove.map((movie) => movie.markAsDeleted()));
      return true;
    });
  } catch (error) {
    console.error('Error removing movie:', error);
    return false;
  }
};
