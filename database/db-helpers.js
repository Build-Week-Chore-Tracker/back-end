const db = require('./config/db-config.js')

module.exports = {
    getUsers,
    getUser,
    getUserById,
    registerUser,
    addChore,
    getChores,
};

//<------GET HELPERS----------------
function getUsers () {
    return db('User')
    .select('User.id', 'User.name', 'User.username', 'User.email')
}

function getUser (user) {
    return db('User')
        .where(user)
        .first()
}

function getUserById (user) {
    return db('User')
    .where(user)
    .first()
    .select('User.id', 'User.name', 'User.username', 'User.email')
}

function getChores () {
    return db('Chore')
}
//<------POST HELPERS----------------
function registerUser (user) {
    return db('User')
    .insert(user)
}

function addChore (chore) {
    return db('Chore')
    .insert(chore)
}
