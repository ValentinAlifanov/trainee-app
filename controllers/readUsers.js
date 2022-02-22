
const User = require('../models/User')


const errorHandler = require('../utils/errorHandler')


module.exports.read = async function(req, res) {
    try {
        console.log(1111111)
        const users = await User.find()
        res.status(200).json(users)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req,res) {
    try{
        console.log(22222)
        const user = await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body}
        )
        res.status(200).json(
            {message : "update"}
        )
    } catch (e) {
        errorHandler(res, e)
    }
}




