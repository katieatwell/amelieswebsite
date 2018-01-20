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

//temporary authuser array to work with before hooking up to DB
//remember, passwords should never be stored plain text like here but use bcrypt 12 or greater before storing to db
const users = [
  {
    id:1,
    name: "john",
    password:"doe"
  },
  {
    id:2,
    name:"test",
    password:"test"
  }
];

//set up jwt
let jwtOptions ={};
jwtOptions.jwtFromRequrest=ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey="PatsSecret";

//set up passport strategy
const strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next){
  console.log("payload arrived", jwt_payload);
  // Will change to DB call after local array storage is seen working
  let user=users[_.findIndex(users, {id:jwt_payload.id})];
  if(user){
    next(null,user);
  }else {
    next(null, false);
  }
});

passport.use(strategy);
//init passport
app.use(passport.initialize());

//set up bodyparser

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());

// Router
// const controller = require('./controller/index.js'); //need an index file for the controller
// app.use('/menu', controller.menu ); // wont work without index file.

app.get("/", function(req,res){
  res.json({message:"Express is up!"});
})

app.post("/login",function(req,res){
  //temp store name and pw for logic
  if(req.body.name && req.body.password){ //both exist then
    var name=req.body.name;
    const password=req.body.password
  };
  let user=users[_.findIndex(users, {name:name})];
  console.log(user)
  if (!user){
    res.status(401).json({message: "no such user found"})
  }
  if (user.password===req.body.password){
    //save only user id as personally identity for payload on token
    const payload={id:user.id};
    const token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message:"ok", token:token});
  } else{
    res.status(401).json({message:"password did not match"});
  }
})

// Server Listen
app.listen(PORT, function() {
    console.log('Back-end connected to Port 8080');
});

