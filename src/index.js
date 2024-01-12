import app from './app.js';
import {sequelize} from './database/database.js';

const port = 3000
async function main() {
  try {
    await sequelize.authenticate();
    app.listen(port);
    console.log('Server on port', port);
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
