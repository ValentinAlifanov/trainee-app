const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    topic : {
        type: String,
        required: true,
    },
    text : {
        type: String,
        required: true,
    },
        category : {
            type: String,
            required: true,
        },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('articles', articleSchema)