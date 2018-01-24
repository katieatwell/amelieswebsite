const router = require('express').Router();
const manager = require('../../controllers/manager');

// router.post(['/cafe-menu', '/catering-menu'], manager.CCMenu.newEntry);

// router.put(['/cafe-menu', '/catering-menu'], manager.CCMenu.updateEntry);

// router.delete(['/cafe-menu', '/catering-menu'], manager.CCMenu.deleteEntry);

// router.route('/cake-menu')
//   .post(manager.CakeMenu.newEntry)
//   .put(manager.CakeMenu.updateEntry)
//   .delete(manager.CakeMenu.deleteEntry);

// router.route('/composed-cake-menu')
//   .post(manager.ComposedCakeMenu.newEntry)
//   .put(manager.ComposedCakeMenu.updateEntry)
//   .delete(manager.ComposedCakeMenu.deleteEntry);

// router.route('/cake-price')
//   .post(manager.CakePrice.newEntry)
//   .put(manager.CakePrice.updateEntry)
//   .delete(manager.CakePrice.deleteEntry);
router.get('/', function(req,res){
  res.json("Success! You can only see this with a token example 2!")
})
// router.route('/cc-menu')
//   .post(manager.CCMenu.newEntry)
//   .put(manager.CCMenu.updateEntry)
//   .delete(manager.CCMenu.deleteEntry);

// router.post('/cake-menu/custom', manager.CakeMenu.newCustomOptionEntry);
// router.post('/cake-menu/composed', manager.CakeMenu.newComposedCakeEntry);
// router.post('/cake-menu/price', manager.CakeMenu.newCakePriceEntry);

// router.route('/cake-menu')
//   .put(manager.CakeMenu.updateEntry)
//   .delete(manager.CakeMenu.deleteEntry);



module.exports = router;
