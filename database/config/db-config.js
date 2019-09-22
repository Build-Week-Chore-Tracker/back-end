const knex = require('knex'); //import knex dependency
const knexFile = require('../../knexfile.js') //import knexFile connected to db
const knexConfig = knexFile.development; //create knexConfig and set it to development*

//export your knex configuration
module.exports = knex(knexConfig)