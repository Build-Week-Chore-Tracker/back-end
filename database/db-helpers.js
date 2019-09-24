const db = require('./config/db-config.js')

module.exports = {
    getUsers,
    getUser,
    getUserById,
    // getFamily,
    getChores,
    getChildren,
    registerUser,
    addChore,
    addChild,
    updateChore,
    updateChildren,
};

//<------GET HELPERS----------------
function getUsers () {
    return db('User')
    .select('User.id', 'User.name', 'User.username', 'User.email')
}

// function getFamily (id) {
//     return db('User as u')
//         .join('User_child as uc', 'u.id', 'uc.User_id')
//         .join('Family as u', 'u.id', 'uc.User_id')
//         .where({ User_id: id })
// }

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
function getChildren () {
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

function addChild (child) {
    return db('User_Child')
        .insert(child)
}
//<------PUT HELPERS----------------
function updateChore (id, changes) {
    return db('Chore')
        .where({ id })
        .update(changes)
}
function updateChildren (id, changes) {
    return db('User_child')
        .where({ id })
        .update(changes)
}