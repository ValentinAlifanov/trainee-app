const express = require('express')
const controller = require('../controllers/readUsers')
const passport = require("passport");
const router = express.Router();
const upload = require('../middleware/upload')

router.get('/read/:id', controller.read)
// localhost:5000/api/readUsers/read

router.patch('/update/:id', passport.authenticate('jwt', {session:false}), upload.single('userAvatar'), controller.update)
// localhost:5000/api/readUsers/update


module.exports = router