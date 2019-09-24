const router = require('express').Router(); //import express router
const Users = require('../database/db-helpers.js') //import endpoints helpers/models

//<-------------GET REQUESTS--------------------------
router.get('/:id', (req, res) => { 

    const { id } = req.params;

    Users.getFamily({ id })
        .then(users => {
            res.status(200).json(users)
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

router.get('/:id/children', (req, res) => { 

    const { id } = req.params;

    Users.getChildren({ id })
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
                message: "Your chore was created sucessfully",
                chore_id: chore
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
        
})
// //adds a child
router.post('/register-child',  (req, res) => {

    const { name, username, age, points, child  } = req.body; //fetch data from body

    Users.addChild({ name, username, age, points, child }) //set hash to password
        .then(id => {
            res.status(201).json({
                message: 'Your child has been sucessfully added to the family',
                id: id,
                User_id: req.body.User_id
              })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

//<-------------PUT REQUESTS--------------------------
router.put('/chores/:id', (req, res) => { 

    const { id } = req.params;
    const update = req.body;

    Users.updateChore(id, update)
        .then(updated => {
            // console.log(chores)
            res.status(200).json(updated)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
        
})

router.put('/children/:id', (req, res) => { 

    const { id } = req.params;
    const update = req.body;

    Users.updateChildren(id, update)
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})
//<-------------DELETE REQUESTS--------------------------
router.delete('/chores/:id', (req, res) => {
    
    const { id } = req.params;

    Users.removeChore({ id })
        .then(chore => {
            res.status(204).end()
        })
        .catch(err => { console.log(err)})
})

router.delete('/children/:id', (req, res) => {
    
    const { id } = req.params;

    Users.removeChild({ id })
        .then(child => {
            res.status(204).end()
        })
        .catch(err => { console.log(err)})
})

module.exports = router;