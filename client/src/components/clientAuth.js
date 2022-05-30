
var shajs = require('sha.js');

function authCode(){
  console.log(process.env.authkey);
  return shajs('sha256').update(`${process.env.REACT_APP_authkey}`).digest('hex');
}

export default authCode;