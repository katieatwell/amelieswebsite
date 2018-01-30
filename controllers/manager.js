let db = require('../models/index.js');

module.exports = {
  CCMenu: {
    newEntry: function(req, res) {
      db.CCMenu.create({
          title: req.body.title,
          cafeOrcatering: req.body.cafeOrcatering,
          category: req.body.category,
          price: req.body.price,
          description: req.body.description
        },
        function(err, data) {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          }
          else res.sendStatus(200);
        });
    },

    updateEntry: function(req, res) {
      console.log(req.body.id);
      db.CCMenu.findOneAndUpdate({ '_id': req.body.id }, {
          title: req.body.title,
          cafeOrcatering: req.body.cafeOrcatering,
          category: req.body.category,
          price: req.body.price,
          description: req.body.description
        },
        function(err, data) {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          }
          else res.sendStatus(200);
        });
    },

    deleteEntry: function(req, res) {
      console.log(req.body.id);
      db.CCMenu.deleteOne({ '_id': req.body.id }, function(err) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        }
        else res.sendStatus(200);
      });
    }
  },

  CakeMenu: {
    newCustomOptionEntry: function(req, res) {
      db.CakeData.create({
          menuCategory: 'CustomCakes',
          descriptor: req.body.descriptor,
          detail: req.body.detail
        },
        function(err) {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          }
          else res.sendStatus(200);
        });
    },

    newComposedCakeEntry: function(req, res) {
      db.CakeData.create({
          menuCategory: 'ComposedCakes',
          descriptor: req.body.descriptor,
          detail: req.body.detail
        },
        function(err) {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          }
          else res.sendStatus(200);
        });
    },

    newCakePriceEntry: function(req, res) {
      db.CakeData.create({
          menuCategory: 'CakePrices',
          descriptor: 'price',
          detail: req.body.detail
        },
        function(err) {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          }
          else res.sendStatus(200);
        });
    },

    updateEntry: function(req, res) {
      console.log(req.body.id);
      db.CakeData.findOneAndUpdate({ '_id': req.body.id }, {
          descriptor: req.body.descriptor,
          detail: req.body.detail
        },
        function(err) {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          }
          else res.sendStatus(200);
        });
    },

    deleteEntry: function(req, res) {
      db.CakeData.deleteOne({ '_id': req.body.id }, function(err) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        }
        else res.sendStatus(200);
      });
    }
  }
};
