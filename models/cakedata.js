const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Build your own cake options
const CakeDataSchema = new Schema({
  MenuCategory: {
    type: String,
    required: true
  },
  descriptor: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  }
});

const CakeData = mongoose.model('CakeData', CakeDataSchema);

module.exports = CakeData;
