const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = Promise;

const CCMenuSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cafeOrcatering: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: String,
  description: String
});

const CCMenu = mongoose.model('CCMenu', CCMenuSchema);

module.exports = CCMenu;