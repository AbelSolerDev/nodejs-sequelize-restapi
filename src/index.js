import app from './app.js';
import {sequelize} from './database/database.js';
/* Como ya he creado las rutas, ya no sirve importar los modelos.
import './models/Project.js'
import './models/Task.js'*/

const port = 3000

async function main() {
  try {
    await sequelize.sync({force:false})
    app.listen(port);
    console.log('Server on port', port);
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
