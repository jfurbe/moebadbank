var express = require("express");
var app = express();
var cors = require("cors");
const path = require('path');
var dal = require('./dal');
var auth = require('./auth');

//used to serve static files from public
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(cors());


// create user account
app.get('/account/create/:name/:email/:password/', function(req, res) {
  console.log(req.params.name);
  const idToken = req.headers.authorization;
  console.log(idToken);
  if (!idToken) {
    res.status(401).send();
    return
  } 
  auth.getAuth()
  .then(key=> {
    if(key.badbank != idToken){
      res.status(401).send();
    }
  })
  console.log('auth passed');

  let userProf ='';
  dal.findOne(req.params.email).
    then((user)=> {
    if(user){
      res.send('err: User already exists');
    } else{
      dal.create(req.params.name, req.params.email, req.params.password).
      then((user)=> {
        console.log(user);
        userProf = JSON.stringify(user);
        res.send(user);
      });
    }
  });
});
// find User 
app.get('/account/find/:email/', function(req, res) {
  console.log(req.params.email)
  console.log(req);
  dal.findOne(req.params.email).
    then((user)=> {
      console.log(user);
        res.send(user);
    })
});

//Update User
app.get('/account/update/:email/:amount/', function (req,res) {
  const idToken = req.headers.authorization;
  console.log(idToken);
  if (!idToken) {
    res.status(401).send();
    return
  } 
  auth.getAuth()
  .then(key=> {
    if(key.badbank != idToken){
      res.status(401).send();
    }
  })
  console.log('auth passed');
  dal.update(req.params.email, parseInt(req.params.amount)).
  then((user)=>
  console.log(user, 'updated successfully'))
});

// login user
app.get('/account/login/:email/:password', function(req, res) {
  dal.findOne(req.params.email).
    then((user)=> {
      if(user?.password === req.params.password){
        res.send(user);
      }else {
        res.send('Login Failed: User not found or Wrong password');
      }
    })
});

// get all
app.get('/account/all', (req, res)=> {
  const idToken = req.headers.authorization;
  
  if (!idToken) {
    res.status(401).send();
    return
  }

  auth.getAuth()
  .then(key=> {
    if(key.badbank != idToken){
      console.log('this', key.badbank)
      res.status(401).send();
    }
  })
  console.log('auth passed');
  dal.all().
  then((docs)=> {
    res.send(docs);
  });
});

/*app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, '../build'));                               
});*/

var port = process.env.PORT || 8080;
app.listen(port);
console.log('running on port ' + port);