
var shajs = require('sha.js');

function authCode(){
  return shajs('sha256').update(`${process.env.REACT_APP_authkey}`).digest('hex');
}

export default authCode;