
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.read = async function(req, res) {
    try {
        const user = await User.findOne(
        {_id: req.params.id}
        )
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req,res) {
    try{
        console.log(req.body)
        const user = await User.findOneAndUpdate(
            {_id: req.params.id},
            {
                userAvatar: req.body.userAvatar || '',
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:req.body.password,
                description:req.body.description
            }
        )
        res.status(200).json(
            user,
        )
    } catch (e) {
        errorHandler(res, e)
    }
}




