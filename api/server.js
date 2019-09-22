const express = require('express') //import express dependency
const server = express(); //assign express to your server
server.use(express.json()) //teach express to parse data from body to JSON

//sanity check
server.get('/', (req, res) => {res.send('Server is up and running!')})

//import endpoints
const endpoints = require('../endpoints/endpoints.js');
server.use('/api', endpoints)

// make sure you export your server
module.exports = server;