// database/index.js
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import Movie from '../models/Movies';
import { movieSchema } from './schema/movieSchema';

const adapter = new SQLiteAdapter({
  schema: {
    version: 1,
    tables: [movieSchema],
  },
});

export const database = new Database({
  adapter,
  modelClasses: [Movie],
});
