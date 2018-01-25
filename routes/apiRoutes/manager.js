const router = require('express').Router();
const manager = require('../../controllers/manager');

router.get('/', function(req, res) {
  res.json("Success! You can only see this with a token example 2!")
});

router.route('/cc-menu')
  .post(manager.CCMenu.newEntry)
  .put(manager.CCMenu.updateEntry)
  .delete(manager.CCMenu.deleteEntry);

router.post('/cake-menu/custom', manager.CakeMenu.newCustomOptionEntry);
router.post('/cake-menu/composed', manager.CakeMenu.newComposedCakeEntry);
router.post('/cake-menu/price', manager.CakeMenu.newCakePriceEntry);

router.route('/cake-menu')
  .put(manager.CakeMenu.updateEntry)
  .delete(manager.CakeMenu.deleteEntry);



module.exports = router;
