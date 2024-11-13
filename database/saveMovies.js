// database/saveMovies.js
import { database } from './index';
import Movie from '../models/Movies';

export const saveMovies = async (movies) => {
  try {
    await database.write(async () => {
      await Promise.all(
        movies.map(async (movie) => {
          await database.collections.get('movies').create((movieRecord) => {
            movieRecord.movieId = movie.id;
            movieRecord.title = movie.title;
            movieRecord.overview = movie.overview || '';
            movieRecord.releaseDate = movie.release_date || '';
            movieRecord.popularity = movie.popularity;
          });
        })
      );
    });
  } catch (error) {
    console.error('Error saving movies:', error);
  }
};
