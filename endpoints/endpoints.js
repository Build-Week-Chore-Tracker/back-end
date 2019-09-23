const router = require('express').Router(); //import express router
const Users = require('../database/db-helpers.js') //import endpoints helpers/models


//<-------------GET REQUESTS--------------------------
router.get('/users-list',  (req, res) => {

    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
        
})


module.exports = router;