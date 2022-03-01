const Articl = require('../models/Articl')
const errorHandler = require('../utils/errorHandler')


module.exports.getAll = async function (req,res) {
    try {
        const articles = await Articl.find()
        res.status(200).json(articles)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getAllByUserId = async function (req,res) {
    try {
        const articles = await Articl.find({})
        res.status(200).json(articles)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function (req,res) {
    try {
        const articles = await Articl.find({
            user: req.params.id
        })
        res.status(200).json(articles)
    } catch (e) {
        errorHandler(res, e)
    }
}


module.exports.create = async function (req,res) {
    try{
        const article = await new Articl({
            topic: req.body.topic,
            text: req.body.text,
            category: req.body.category,
            user: req.body.user,
            userName: req.body.userName
        }).save()
        res.status(201).json(article)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getOne = async function (req,res) {
    try {
        const post = await Articl.findOne({
            _id: req.params.id
        })
        res.status(200).json(post)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req,res) {
    try{
        const article = await Articl.findOneAndUpdate(
            {_id: req.params.id},
            {
                count: req.body.count
            })
        res.status(201).json(article)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getPopular = async function (req,res) {
    try {
        const popular = await Articl.find({}).sort('-count').exec()
        res.status(200).json(popular[0])
    } catch (e) {
        errorHandler(res, e)
    }
}