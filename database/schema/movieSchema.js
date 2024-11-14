// schema/movieSchema.js
import { appSchema, tableSchema } from '@nozbe/watermelondb';

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'movies',  // Ensure this matches `static table` in Movie.js
      columns: [
        { name: 'movie_id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'overview', type: 'string' },
        { name: 'release_date', type: 'string' },
        { name: 'popularity', type: 'number' },
      ],
    }),
  ],
});

export default schema;

