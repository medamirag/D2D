const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    postid: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String
    },
    author: {
        type: String,
    },
    reaction: {
        type: Number,
    }

})
module.exports = mongoose.model('comment', postSchema)