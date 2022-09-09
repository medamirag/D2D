require('../db/db')
const res = require('express/lib/response');
const User= require('../models/user.model');
const addUserService = (data) => {
    console.log(data);

    if(data.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/)&&data.email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
    const post=new User(data).save();
    return post;

    }
    else
    {
        return "error";

    }
}
module.exports=addUserService
