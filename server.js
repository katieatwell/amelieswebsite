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



// Router
// const controller = require('./controller/index.js'); //need an index file for the controller
// app.use('/menu', controller.menu ); // wont work without index file.

app.get("/", function(req,res){
  res.json({message:"Express is up!"});
})

// Server Listen
app.listen(PORT, function() {
    console.log('Back-end connected to Port 8080');
});

