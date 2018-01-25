let db = require('../models/index.js');

let CakeMenu = {
  getCustomOptionsALL: function(req, res) {
    CakeMenu.findDescriptors('CustomCakes').then(function(descriptors) {
      CakeMenu.queryByDescriptors(descriptors).then(function(data) {
        res.json(CakeMenu.buildObject(data));
      });
    });
  },
  
  getComposedCakesALL: function(req, res) {
    CakeMenu.findDescriptors('ComposedCakes').then(function(descriptors) {
      CakeMenu.queryByDescriptors(descriptors).then(function(data) {
        res.json(CakeMenu.buildObject(data));    
      });
    });
  },
  
  getCakePricesALL: function(req, res) {
    CakeMenu.findDescriptors('CakePrices').then(function(descriptors) {
      CakeMenu.queryByDescriptors(descriptors).then(function(data) {
        res.json(CakeMenu.buildObject(data));    
      });
    });
  },
  
  findDescriptors: function(menuCategory) {
    return db.CakeData.distinct('descriptor', { 'menuCategory': menuCategory });
  },

  queryByDescriptors: function(descriptors) {
    let qPromises = [];
    descriptors.forEach(function(descriptor) {
      qPromises.push(db.CakeData.find({ 'descriptor': descriptor }));
    });
    return Promise.all(qPromises);
  },
  
  buildObject: function(data) {
    let results = {};
    data.forEach(function(each) {
      if (each.length > 0) {
        results[each[0].descriptor] = each;
      }
    });
    return results;
  }
};


module.exports = CakeMenu;