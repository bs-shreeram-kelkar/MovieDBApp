// resetDatabase.js
const { database } = require('./database/index'); // Adjust the path to your database instance

async function resetDatabase() {
  try {
    await database.write(async () => {
      await database.unsafeResetDatabase();
    });
    console.log('Database reset successfully');
  } catch (error) {
    console.error('Error resetting the database:', error);
  }
}

resetDatabase().then(() => {
  console.log('Database reset script complete.');
  process.exit(0); // Exit the script
});
