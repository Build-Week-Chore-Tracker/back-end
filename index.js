require('dotenv').config(); //import your .env file asap in your code
const server = require('./api/server.js') //import server
const defaults = require('./database/config/defaults.js') //import defaults directory
const port = defaults.port; //create a dynamic port

//have server listening on dynamic port
server.listen(port, () => console.log(`=== Server running on port ${port} ===`))