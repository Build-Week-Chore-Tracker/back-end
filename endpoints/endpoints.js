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
// router.get('/family/:id', (req, res) => { 

//     const { id } = req.params;

//     Users.getFamily(id)
//         .then(family => {
//             res.status(200).json(family)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json(err)
//         })
// })

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

router.get('/children', (req, res) => { 

    Users.getChildren()
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
router.post('/',  (req, res) => {

    const { name, username, age  } = req.body; //fetch data from body

    Users.addChild({ name, username, age }) //set hash to password
        .then(id => {
            res.status(201).json({
                message: 'Your child has been sucessfully added to the family',
                id: id
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
//<-------------DELETE REQUESTS--------------------------


module.exports = router;