const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    // id: {
    //     type: String,
    //     require: true
    // },
    date: {
        type:Date,
        default:Date.now
    },
    text:{
        type:String
    },
    image:{
        type:String,
    }

})
module.exports = mongoose.model('Post',postSchema)