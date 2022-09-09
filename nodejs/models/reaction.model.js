const mongoose = require('mongoose')
const reactionSchema = mongoose.Schema({
    // id: {
    //     type: String,
    //     require: true
    // },
    reactionid:{
        type:String
    },
    commentid:{
        type:String
    },
    like:{
        type: Number
    },
    dislike:{
        type: Number
    }

})
module.exports = mongoose.model('Reaction',reactionSchema)