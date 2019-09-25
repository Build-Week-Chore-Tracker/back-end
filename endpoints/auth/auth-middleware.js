const jwt = require('jsonwebtoken');
const secrets = require('./secrets.js');

module.exports = (req, res, next) => {

  const token = req.headers.authorization; // fetching token from the header
    if(token){
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if(err) {
          //token is expired
          res.status(401).json({ message: 'Invalid credentials' }) 
        } else {
          //token is still valid
          next();
          req.user = { username: decodedToken.username }
        }
      })
    } else {
      res.status(401).json({ error: 'Unathorized, you need to login or create an account' });
    }
};