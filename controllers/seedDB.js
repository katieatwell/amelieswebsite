var db = require("../models");


const bcrypt=require("bcrypt");

//remember, passwords should never be stored plain text like here but use bcrypt 12 or greater before storing to db
console.log("running double check");
//set up original user and password. 
//store with bcrypt - seed with encryption


    console.log("hit seed function")
    bcrypt.hash('tested',12,function(err, hash){
    if (err)console.error(err);
    console.log('bcrypt running, hash: '+ hash);
    db.AuthUser
      .create({ name: "test3", password:hash })
      .then(function(dbAuthUser) {
        // If saved successfully, print 
        console.log(dbAuthUser);
      })
      .catch(function(err) {
        // If an error occurs, print it to the console
        console.log(err.message);
      });
    })
 
    db.AuthUser.find(function(err,user){
      if (err) return console.error(err);
      console.log(user);
    })

