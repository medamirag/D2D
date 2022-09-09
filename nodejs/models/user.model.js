const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    // id: {
    //     type: String,
    //     require: true
    // },
  
    email:{
        type:String
    },
    password:{
        type: String
    },
    name:{
        type: String
    },
    dateofbirth:{
        type: String
    }

})
module.exports = mongoose.model('User',userSchema)