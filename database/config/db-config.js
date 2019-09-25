const knex = require('knex'); //import knex dependency
const knexFile = require('../../knexfile.js') //import knexFile connected to db

const enviroment = process.env.DB_ENV || 'development';

//export your knex configuration
module.exports = knex(knexFile[enviroment])