const express = require('express')
const controller = require('../controllers/article')
const passport = require("passport");
const router = express.Router()

router.get('/',controller.getAll)

router.get('/post/:id',controller.getOne)

router.get('/postPopular',controller.getPopular)

router.patch('/update/:id',controller.update)

router.get('/:id', passport.authenticate('jwt', {session:false}), controller.getById)

router.post('/create', passport.authenticate('jwt', {session:false}),controller.create)

module.exports = router