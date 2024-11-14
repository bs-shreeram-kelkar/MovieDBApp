// database/index.js
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import Movie from '../models/Movie';
import schema from './schema/movieSchema';

const adapter = new SQLiteAdapter({
  schema,
  // other options like migrations, if any
});

const database = new Database({
  adapter,
  modelClasses: [Movie],  // Add Movie here
  actionsEnabled: true,
});

export default database;