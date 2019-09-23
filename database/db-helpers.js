const db = require('./config/db-config.js')

module.exports = {
    registerUser,
    getUsers,
    getUser
};

function getUsers () {
    return db('User')
}

function registerUser (user) {
    return db('User')
    .insert(user)
}

function getUser (user) {
    return db('User')
    .where(user)
    .first()
}