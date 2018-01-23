const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Build your own cake options
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

// Pre-designed Cakes
const CakeComposedSchema = new Schema({
  option: {
    type: String,
    required: true
  },
  description: {
    type: [String],
  }
});

const CakeComposed = mongoose.model('CakeComposed', CakeComposedSchema);

// Cake Prices based on size/options
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
  Composed: CakeComposed,
  Price: CakePrice
};
