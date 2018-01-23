// Set up express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Set up mongoose and connect to mongoDB
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const mongoDB_uri = process.env.MONGODB_URI || 'mongodb://localhost/amelies';
mongoose.connect(mongoDB_uri, {useMongoClient: true})
  .then(
    () => {console.log('MongoDB connected')},
    err => {console.log(`Error connecting to MongoDB \n${err}`)}
  );

// set up jwt dependencies
const _ = require("lodash");
const bodyParser =require("body-parser");
const jwt =require("jsonwebtoken");

const passport =require("passport");
const passportJWT=require("passport-jwt");

const ExtractJwt =passportJWT.ExtractJwt;
const JwtStrategy=passportJWT.Strategy;

const bcrypt=require("bcrypt");
//remember, passwords should never be stored plain text like here but use bcrypt 12 or greater before storing to db

//set up original user and password. should be moved to seeds at some point.. how to store using bc
// db.AuthUser
//   .create({ name: "test", password:"tested" })
//   .then(function(dbAuthUser) {
//     // If saved successfully, print 
//     console.log(dbAuthUser);
//   })
//   .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });

//store with bcrypt
// bcrypt.hash('tested',12,function(err, hash){
//   if (err)console.error(err);
//   db.AuthUser
//     .create({ name: "test2", password:hash })
//     .then(function(dbAuthUser) {
//       // If saved successfully, print 
//       console.log(dbAuthUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, print it to the console
//       console.log(err.message);
//     });
// })
var db = require("./models");
//show database
// db.AuthUser.find(function(err,user){
//   if (err) return console.error(err);
//   console.log(user);
// })

//set up jwt
let jwtOptions ={};
jwtOptions.jwtFromRequest=ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey="PatsSecret";

//set up passport strategy
const strategy = new JwtStrategy(jwtOptions, function(jwt_payload, done){
  console.log("payload arrived", jwt_payload);
  // Will change to DB call after local array storage is seen working
  //let user=users[_.findIndex(users, {id:jwt_payload.id})];
  let user=db.AuthUser.findOne({_id:jwt_payload.id})
  if(user){
    return done(null,user);
  }else {
    return done(null, false);
  }
});

//notes this strategy requires name and password to be first level under req when sent to login
//this strategy requires headers to have the key value pair of {Authorization: jwt XXXXXXXXX} where XXXXX is the token string.
//token timer isn't set in this case.

passport.use(strategy);
//init passport
app.use(passport.initialize());
app.use(express.static('client/public'));
//set up bodyparser

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());

// Router
// const controller = require('./controller/index.js'); //need an index file for the controller
// app.use('/menu', controller.menu ); // wont work without index file.

app.get("/", function(req,res){
  res.sendFile(process.cwd()+'client/public/index.html');
  //res.json({message:"Express is up!"});
})

app.post("/login",function(req,res){
  //temp store name and pw for logic
  if(req.body.name && req.body.password){ //both exist then
    var name=req.body.name;
    const password=req.body.password;
  };
  
  db.AuthUser.findOne({name:name}, function(err, user){
    console.log(user);
    if (err) console.error(err);
    if (user===null){
      res.status(401).json({message: "no such user found"})
    }
    if (user.password!==null){
      bcrypt.compare(req.body.password ,user.password, function(err, result){
        if (err) console.error(err);
        console.log(result);
        if (result===true){
          console.log('correct password');
          const payload={id:user._id};
          const token = jwt.sign(payload, jwtOptions.secretOrKey);
          res.json({message:"ok", token:token});
        }else {
          res.status(401).json({message:"password did not match"});
        }
      })
    }
  });
})

app.get("/authed", passport.authenticate('jwt', {
  session:false
}), function(req,res){
  res.json("Success! You can only see this with a token!")
})

// Server Listen
app.listen(PORT, function() {
    console.log('Back-end connected to Port 8080');
});

