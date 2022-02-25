const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')

const errorHandler = require('../utils/errorHandler')

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if(candidate) {
        // Проверка пароля, пользователь существует
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)

        if(passwordResult) {
            // Генерация токена - пароли совпали
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60 * 60})
            res.status(200).json({
                token: `Bearer ${token}`,
                userId: candidate._id,
                userName: `${candidate.firstName} ${candidate.lastName}`
            })
        }
        else {

            res.status(401).json({
                message: 'Пароли не совпадают. Попробуйте снова.'
            })
        }
    }
    else {
        // Пользователя нет, ошибка
        res.status(404). json({
            message: "Пользователь с таким email не найден."
        })
    }
}

module.exports.register = async function (req,res) {
    try {
        const candidate = await User.findOne({email: req.body.email})
        if(candidate) {
            // Проверка на существование пользователя
            res.status(409).json({
                message: 'Такой email уже занят. Попробуйте другой.'
            })
        }
        else{
            //Нужно создать пользователя, если он не найден а ДБ
            const salt = bcrypt.genSaltSync(5)
            const password = req.body.password
            const user = await User.create ({
                email: req.body.email,
                password: bcrypt.hashSync(password, salt),
                firstName: req.body.firstName,
                lastName: req.body.lastName
            })
            const token = jwt.sign({
                email: user.email,
                userId: user._id
            }, keys.jwt, {expiresIn: 60 * 60})
            res.status(202).json({
                token: `Bearer ${token}`,
                userId: user._id
            })
        }
    } catch (e) {
        errorHandler(res, e)
    }

}


