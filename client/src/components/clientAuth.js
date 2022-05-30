require('dotenv').config({path: './.env'});
var shajs = require('sha.js');

function authCode(){
  console.log(process.env.authkey);
  return shajs('sha256').update(`${process.env.authkey}`).digest('hex');
}

export default authCode;