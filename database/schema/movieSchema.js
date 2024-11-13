// schema/movieSchema.js
import { tableSchema } from '@nozbe/watermelondb';

export const movieSchema = tableSchema({
  name: 'movies',
  columns: [
    { name: 'id', type: 'number' },
    { name: 'title', type: 'string' },
    { name: 'overview', type: 'string', isOptional: true },
    { name: 'release_date', type: 'string', isOptional: true },
    { name: 'popularity', type: 'number', isOptional: true },
    { name: 'backdrop_path', type: 'string'},
  ],
});
