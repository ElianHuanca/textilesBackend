const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = process.env.DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
//const port = process.env.DB_PORT ? process.env.DB_PORT : 5432;

console.log(database, username, password, host);

const sequelize = new Sequelize(database, username, password ,{
    host,
    dialect: 'postgres',
    /* dialectOptions: {
        ssl: {
          require: false,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }, */
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
