const express = require('express');
const router = express.Router();

const path = require('path');

router.use(express.static(path.join(__dirname + '/client/build')));
router.use('/api', require('./apiRoutes') );

router.get('*', path.join(__dirname + '/client/build/index.html'));

module.exports = router;