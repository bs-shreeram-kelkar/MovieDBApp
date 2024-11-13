// models/Movie.js
import { Model } from '@nozbe/watermelondb';
import { field, text } from '@nozbe/watermelondb/decorators';

export default class Movie extends Model {
  static table = 'movies';

  // @field('movie_id') movieId;
  // @text('title') title;
  // @text('overview') overview;
  // @field('release_date') releaseDate;
  // @field('popularity') popularity;
}
