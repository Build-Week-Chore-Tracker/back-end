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

router.get('/chores', (req, res) => { 

    Users.getChores()
        .then(chores => {
            console.log(chores)
            res.status(200).json(chores)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
        
})
router.get('/child', (req, res) => { 

    Users.getChild()
        .then(children => {
            res.status(200).json(children)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
        
})
//<-------------POST REQUESTS--------------------------
router.post('/chores', (req, res) => { 

    const chore = req.body;

    Users.addChore(chore)
        .then(chore => {
            res.status(201).json({
                message: "Your chore was created sucessfully"
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
        
})

router.post('/child',  (req, res) => {

    const { name, username, age  } = req.body; //fetch data from body

    Users.addChild({ name, username, age }) //set hash to password
        .then(user => {
            res.status(201).json({
                message: 'Your child has been sucessfully added to the family'
              })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

//DUMMY ENDPOINTS

module.exports = router;