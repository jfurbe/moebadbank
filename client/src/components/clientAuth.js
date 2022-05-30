require('dotenv').config({path: './.env'});
var shajs = require('sha.js');

const authCode = shajs('sha256').update(`${process.env.authkey}`).digest('hex');

module.exports= {authCode};