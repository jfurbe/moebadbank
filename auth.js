require('dotenv').config({path: './.env'});
const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://${process.env.authadmin}:${process.env.authpass}@cluster0.gtfnm.mongodb.net/?retryWrites=true&w=majority`;
let db   = null;


// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    console.log(err);
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db('Auth');
});

// get domain authorization
function getAuth(auth) {
  return new Promise((resolve, reject) => {
      const customers = db
          .collection('Servers')
          .findOne({ server: 'badbank' })
          .then((doc) => {
            console.log(doc)
            resolve(doc);
          })
          .catch((err) => reject(err));
  })
}

module.exports= {getAuth};