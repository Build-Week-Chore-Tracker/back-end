const db = require('./config/db-config.js')

module.exports = {
    getUsers,
    getUser,
    getUserById,
    registerUser,
};

//<------GET HELPERS----------------
function getUsers () {
    return db('User')
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
}
//<------POST HELPERS----------------
function registerUser (user) {
    return db('User')
    .insert(user)
}
