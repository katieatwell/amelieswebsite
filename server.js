// Set up express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Express middleware - Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const routes = require('./routes');
app.use(routes);

// Set up mongoose and connect to mongoDB
const mongoose = require('mongoose');
const mongoDB_uri = process.env.MONGODB_URI || 'mongodb://localhost/amelies';
mongoose.Promise = Promise;
mongoose.connect(mongoDB_uri, {useMongoClient: true})
  .then(
    () => {console.log('MongoDB connected')},
    err => {console.log(`Error connecting to MongoDB \n${err}`)}
  );

// Server Listen
app.listen(PORT, function() {
    console.log('Back-end connected to Port' + PORT);
});

