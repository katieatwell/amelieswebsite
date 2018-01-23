const router = require('express').Router();
const menu = require('../../controller/menu');

router.get('/cafe-menu', menu.CCMenu.cafe.getAll);
router.get('/catering-menu', menu.CCMenu.catering.getAll);
router.get('/cake-menu', menu.CakeMenu.getAll);
router.get('/composed-cake-menu', menu.ComposedCakeMenu.getAll);
router.get('/cake-price', menu.CakePrice.getAll);

module.exports = router;