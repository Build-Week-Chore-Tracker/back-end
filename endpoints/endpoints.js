const router = require('express').Router(); //import express router
const Users = require('../database/db-helpers.js') //import endpoints helpers/models


//<-------------GET REQUESTS--------------------------
router.get('/dummy-endpoint',  (req, res) => {

    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })
})


module.exports = router;