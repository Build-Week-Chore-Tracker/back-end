const express = require('express') //import express dependency
const server = express(); //assign express to your server
server.use(express.json()) //teach express to parse data from body to JSON

//sanity check
server.get('/', (req, res) => {res.send('Server is up and running!')})

//import authentication middleware
const authenticate = require('../endpoints/auth/auth-middleware.js')

//import endpoints
const endpoints = require('../endpoints/endpoints.js');
server.use('/api/auth/users', authenticate, endpoints)
//import endpoints
const AuthEndpoints = require('../endpoints/auth/auth-endpoints.js');
server.use('/api/auth', AuthEndpoints)
 
// make sure you export your server
module.exports = server;