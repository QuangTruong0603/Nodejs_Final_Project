require('dotenv').config()
var jwt = require('jsonwebtoken')


exports.generateToken = (username) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 1000*60);
    console.log(expirationDate);
    return jwt.sign({ username, expirationDate }, process.env.JWT_SECRET_KEY);
};