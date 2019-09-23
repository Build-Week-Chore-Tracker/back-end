const router = require('express').Router(); //import express router
const Users = require('../database/db-helpers.js') //import endpoints helpers/models



//<-------------GET REQUESTS--------------------------
router.get('/', (req, res) => { 

    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
        
})
router.get('/:id',  (req, res) => {

    const { id } = req.params; //fetch id

    Users.getUserById({ id })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
        
})


module.exports = router;