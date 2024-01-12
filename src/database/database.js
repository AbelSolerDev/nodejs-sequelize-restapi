import Sequelize from 'sequelize';

export const sequelize = new Sequelize('projectsdb_sequalize', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
});