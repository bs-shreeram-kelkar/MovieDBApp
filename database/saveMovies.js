// database/saveMovies.js
import database from ".";
import Movie from "../models/Movie";
export const saveMovies = async (movie) => {
  try {
    return await database.write(async () => {
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
      return true
    });
    } catch (error) {
    console.error('Error saving movies:', error);
    return false
  }
};
