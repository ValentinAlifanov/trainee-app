const express = require('express')
const controller = require('../controllers/article')
const passport = require("passport");
const router = express.Router()

router.get('/',controller.getAll)

router.get('/:id', passport.authenticate('jwt', {session:false}),controller.getById)

router.post('/create', controller.create)

module.exports = router