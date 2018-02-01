let db = require('../models/index.js');

let CCMenu = {
  getCafeALL: function(req, res) {
    CCMenu.findCategories('cafe').then(function(categories) {
      CCMenu.querySelection('cafe', categories).then(function(data) {
        res.json(CCMenu.buildObject(data));
      });
    });
  },

  getCateringALL: function(req, res) {
    CCMenu.findCategories('catering').then(function(categories) {
      CCMenu.querySelection('catering', categories).then(function(data) {
        res.json(CCMenu.buildObject(data));
      });
    });
  },

  findCategories: function(selection) {
    return db.CCMenu.distinct('category', { 'cafeOrcatering': selection });
  },

  querySelection: function(selection, categories) {
    let qPromises = [];
    categories.forEach(function(category) {
      qPromises.push(db.CCMenu.find({ 'cafeOrcatering': selection, 'category': category }).sort('title'));
    });
    return Promise.all(qPromises);
  },

  buildObject: function(data) {
    let results = {};
    data.forEach(function(each) {
      if (each.length > 0) {
        results[each[0].category] = each;
      }
    });
    return results;
  }
};

module.exports = CCMenu;
