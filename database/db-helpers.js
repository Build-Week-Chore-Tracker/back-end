const db = require('./config/db-config.js')

module.exports = {
    getUsers
};

function getUsers () {
    return db('user')
}