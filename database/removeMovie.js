import database from '.';
import { Q } from '@nozbe/watermelondb';

export const removeMovie = async (movieId) => {
  try {
    return await database.write(async () => {
      const movieCollection = database.collections.get('movies');
      console.log(movieId)
      const movieToRemove = await movieCollection.query(Q.where('id', movieId.toString())).fetch()
      console.log(movieToRemove)
    //   const deleted = movieToRemove.map(movie => movie.markAsDeleted())
      await Promise.all(movieToRemove.map((movie) => movie.markAsDeleted()));
      console.log("ertert")
      return true;
    });
  } catch (error) {
    console.error('Error removing movie:', error);
    return false;
  }
};
