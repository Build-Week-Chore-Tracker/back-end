const db = require('./config/db-config.js')

module.exports = {
    getUsers,
    getUser,
    getUserById,
    getChild,
    registerUser,
    addChore,
    getChores,
    addChild,
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
function getChild () {
    return db('User_child')
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

function addChild (id) {
    return db('User as u')
        .join('User_child as uc', 'u.id', 'uc.User_id' )
        .where({ User_id: id })
}
