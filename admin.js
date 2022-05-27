var admin = require("firebase-admin");

var serviceAccount = require("./accountkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports =  admin;