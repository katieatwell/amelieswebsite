const router = require('express').Router();
const CCMenu = require('../../controller/ccmenu');
const CakeMenu = require('../../controller/cakemenu');

router.get('/cafe-menu', CCMenu.getCafeALL);
router.get('/catering-menu', CCMenu.getCateringALL);
router.get('/cake-menu', CakeMenu.getCustomOptionsALL);
router.get('/composed-cake-menu', CakeMenu.getComposedCakesALL);
router.get('/cake-price', CakeMenu.getCakePricesALL);

module.exports = router;