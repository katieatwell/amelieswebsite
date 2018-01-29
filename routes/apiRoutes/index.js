const router = require('express').Router();
const passport = require("passport");
const _ = require("lodash");

//const mongoose = require('mongoose');
var db = require("./../../models");

router.use('/manager', require('./manager'));
// router.use('/manager', passport.authenticate('jwt', { session: false }), require('./manager'));
router.use('/menu', require('./menu'));
router.use('/blog', require('./blog'));

module.exports = router;
