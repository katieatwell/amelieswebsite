// Utility Modules
const path = require('path');

// Set up express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Set up mongoose and connect to mongoDB
const mongoose = require('mongoose');
const mongoDB_uri = process.env.MONGODB_URI || 'mongodb://localhost/amelies';
mongoose.Promise = Promise;
mongoose.connect(mongoDB_uri, {useMongoClient: true})
  .then(
    () => {console.log('MongoDB connected')},
    err => {console.log(`Error connecting to MongoDB \n${err}`)}
  );

// Router
const controller = require('./controller/index.js');
app.use(express.static(path.join(__dirname + '/client/build')));
app.use('/api', controller );
app.get('*', path.join(__dirname + '/client/build/index.html'));

// Server Listen
app.listen(PORT, function() {
    console.log('Back-end connected to Port' + PORT);
});

