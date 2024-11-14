// models/Movie.ts
import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class Movie extends Model {
  static table = 'movies';  // This should match the table name in schema

  @field('movie_id') movieId;
  @field('title') title;
  @field('overview') overview;
  @field('release_date') releaseDate;
  @field('popularity') popularity;
}

