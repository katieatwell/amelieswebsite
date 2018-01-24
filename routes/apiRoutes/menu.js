const router = require('express').Router();
const CCMenu = require('../../controllers/ccmenu');
const CakeMenu = require('../../controllers/cakemenu');

router.get('/cc-menu/cafe', CCMenu.getCafeALL);
router.get('/cc-menu/catering', CCMenu.getCateringALL);
router.get('/cake-menu/custom', CakeMenu.getCustomOptionsALL);
router.get('/cake-menu/composed', CakeMenu.getComposedCakesALL);
router.get('/cake-menu/price', CakeMenu.getCakePricesALL);

module.exports = router;