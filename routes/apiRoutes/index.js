const router = require('express').Router();

router.use('/manager', require('./manager'));
router.use('/menu', require('./menu'));

module.exports = router;