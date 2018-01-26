const express = require('express');
const router = express.Router();

const path = require('path');

router.use(express.static(path.join(__dirname + '/client/build')));
router.use('/api', require('./apiRoutes'));

// router.get('*', path.join(__dirname + '/client/build/index.html'), function(req,res){
//   res.json("Success! You can only see this with a token!")
// });

// set up jwt dependencies
const _ = require("lodash");
const jwt = require("jsonwebtoken");

const passport = require("passport");
const passportJWT = require("passport-jwt");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const bcrypt = require("bcrypt");

var db = require("./../models");

//set up jwt
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = "PatsSecret";

//set up passport strategy
const strategy = new JwtStrategy(jwtOptions, function(jwt_payload, done) {
  console.log("payload arrived", jwt_payload);

  let user = db.AuthUser.findOne({ _id: jwt_payload.id })
  if (user) {
    return done(null, user);
  }
  else {
    return done(null, false);
  }
});

//notes this strategy requires name and password to be first level under req when sent to login
//this strategy requires headers to have the key value pair of {Authorization: jwt XXXXXXXXX} where XXXXX is the token string.
//token timer isn't set in this case.

passport.use(strategy);
//init passport
router.use(passport.initialize());
router.use(express.static('client/public'));
//set up bodyparser



// Router
// const controller = require('./controller/index.js'); //need an index file for the controller
// app.use('/menu', controller.menu ); // wont work without index file.

router.get("/backend", function(req, res) {
  res.sendFile(process.cwd() + '/client/public/index2.html');
  //res.json({message:"Express is up!"});
})

router.post("/login", function(req, res) {
  //temp store name and pw for logic
  console.log(req.body);
  if (req.body.name && req.body.password) { //both exist then
    var name = req.body.name;
    const password = req.body.password;
  };

  db.AuthUser.findOne({ name: name }, function(err, user) {
    console.log(user);
    if (err) console.error(err);
    if (user === null) {
      return res.status(401).json({ message: "no such user found" })
    }
    if (user.password !== null) {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (err) console.error(err);
        console.log(result);
        if (result === true) {
          console.log('correct password');
          const payload = { id: user._id };
          const token = jwt.sign(payload, jwtOptions.secretOrKey);
          res.json({ message: "ok", token: token });
        }
        else {
          res.status(401).json({ message: "password did not match" });
        }
      })
    }
  });
})



module.exports = router;
