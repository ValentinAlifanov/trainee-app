const Articl = require('../models/Articl')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req,res) {
    try {
        console.log('art')
        const articles = await Articl.find()
        res.status(200).json(articles)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getAllByUserId = async function (req,res) {
    try {
        console.log('art')
        const articles = await Articl.find({})
        res.status(200).json(articles)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function (req,res) {
    try {
        const article = await Articl.findById(req.params.id)
        res.status(200).json(article)
    } catch (e) {
        errorHandler(res, e)
    }
}


module.exports.create = async function (req,res) {
    try{
        console.log('create art')
        const article = await new Articl({
            topic: req.body.topic,
            text: req.body.text,
            category: req.body.category,
            user: req.body.user,
        }).save()
        res.status(201).json(article)
    } catch (e) {
        errorHandler(res, e)
    }
}