const express = require('express')
const controller = require('../controllers/readUsers')
const passport = require("passport");
const router = express.Router()

router.get('/read', controller.read)
// localhost:5000/api/readUsers/read

router.patch('/update/:id', passport.authenticate('jwt', {session:false}), controller.update)
// localhost:5000/api/readUsers/update


module.exports = router