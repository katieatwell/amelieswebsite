const router = require('express').Router();
const manager = require('../../controller/manager');

router.post('/cc-menu', manager.CCMenu.newEntry);

router.put('/cc-menu', manager.CCMenu.updateEntry);

router.delete('/cc-menu', manager.CCMenu.deleteEntry);

router.route('/cake-menu')
  .post(manager.CakeMenu.newEntry)
  .put(manager.CakeMenu.updateEntry)
  .delete(manager.CakeMenu.deleteEntry);

router.route('/composed-cake-menu')
  .post(manager.ComposedCakeMenu.newEntry)
  .put(manager.ComposedCakeMenu.updateEntry)
  .delete(manager.ComposedCakeMenu.deleteEntry);

router.route('/cake-price')
  .post(manager.CakePrice.newEntry)
  .put(manager.CakePrice.updateEntry)
  .delete(manager.CakePrice.deleteEntry);

module.exports = router;
