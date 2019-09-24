const router = require('express').Router() //import Express Router  
const Users = require('../../database/db-helpers.js') //import db helpers
const bcrypt = require('bcryptjs'); //import bcrypt dependency
const { generateToken }  = require('./generateToken.js')//import function to generate user token


//<-------------REGISTER GET REQUESTS--------------------------
router.post('/register',  (req, res) => {

    const { email, name, username, password } = req.body; //fetch data from body

    const hash = bcrypt.hashSync(password, 12) //Creates password hash

    Users.registerUser({ name, email, username, password: hash }) //set hash to password
        .then(user => {
            console.log(user)
            res.status(201).json({
                message: 'You have been sucessfully registered!',
                id: user
              })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})
//<-------------REGISTER GET REQUESTS--------------------------
router.post('/login',  (req, res) => {

    const { username, password } = req.body;

    Users.getUser({ username })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token: token,
                    user: user.id
                  })
            } else {
                res.status(404).json({
                    message: `User ${user.username} not found`
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err.response })
        })
})

// export router
module.exports = router;