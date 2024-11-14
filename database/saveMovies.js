// database/saveMovies.js
import database from ".";
import Movie from '../models/Movie';

export const saveMovies = async (movie) => {
  try {
    await database.write(async () => {
      console.log(movie.id)
      console.log(movie.vote_average.toString())
      await database.collections.get('movies').create((movieRecord) => {
        movieRecord._raw.id = movie.id.toString() // Use `_raw` to access WatermelonDB's `id`
        movieRecord.movieId = movie.movieId
        movieRecord.title = movie.title
        movieRecord.overview = movie.overview || '';
        movieRecord.releaseDate = movie.release_date || '';
        movieRecord.popularity = 12.0
        movieRecord.backdrop_path = movie.backdrop_path
        movieRecord.vote_average = movie.vote_average.toString()
      });
    });
    } catch (error) {
    console.error('Error saving movies:', error);
  }
};
