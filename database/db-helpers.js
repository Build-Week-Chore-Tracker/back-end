const db = require('./config/db-config.js')

module.exports = {
    // getUsers,
    getUser,
    getLoggedUser,
    getFamily,
    getChores,
    getChildren,
    registerUser,
    addChore,
    addChild,
    updateChore,
    updateChildren,
    removeChore,
    removeChild,
};

function getFamily (id) {
    return db('User as u')
        .join('User_child as uc', 'u.id', 'uc.User_id')
        .select('uc.id', 'uc.User_id as parent_id', 'uc.name', 'uc.username', 'uc.age', 'uc.points', 'uc.child')
        .where({ 'User_id': id })
}

function getUser (user) { //<---- Used to grab authenticated user at login
    return db('User')
        .where(user)
        .first()
}

function getLoggedUser (user) {
    return db('User')
    .where(user)
    .first()
}

function getChores () {
    return db('Chore')
}
function getChildren (id) {
    return db('User_child')
        .where(id)
}

function removeChore (id) { //<----- Used to delete chore
    return db('Chore')
        .where(id)
        .first()
        .del()
}
function removeChild (id) { //<----- Used to delete child
    return db('User_child')
        .where(id)
        .first()
        .del()
}
//<------POST HELPERS----------------
function registerUser (user) {
    return db('User')
    .insert(user, 'id')
}

function addChore (chore) {
    return db('Chore')
    .insert(chore, 'id')
}

function addChild (child) {
    return db('User_child')
        .insert(child, 'id')
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