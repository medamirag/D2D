const addUser =require('../controllers/user.controller')
const express=require('express');
const userRoute=express.Router();
//Create
userRoute.post('/',addUser)

module.exports=userRoute