const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CakeTypeSchema = new Schema({
  option: {
    type: String,
    required: true
  }
});

const CakeFlavor = mongoose.model('CakeFlavor', CakeTypeSchema);
const CakeButtercream = mongoose.model('CakeButtercream', CakeTypeSchema);
const CakeFilling = mongoose.model('CakeFilling', CakeTypeSchema);
const CakeMD = mongoose.model('CakeMD', CakeTypeSchema); // MD = Masking and Decoration

const CakePriceSchema = new Schema({
  option: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

const CakePrice = mongoose.model('CakePrice', CakePriceSchema);

module.exports = {
  Flavor: CakeFlavor,
  Buttercream: CakeButtercream,
  Filling: CakeFilling,
  MD: CakeMD, 
  Price: CakePrice
};
