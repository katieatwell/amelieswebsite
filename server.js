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

// Router
const controller = require('./controller/index.js');
app.use('/menu', controller.menu );

// Server Listen
app.listen(PORT, function() {
    console.log('Back-end connected to Port 8080');
});

