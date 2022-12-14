const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const postRoute = require('./routes/post.route')
const commentRoute = require('./routes/comment.route')
const UserRoute = require('./routes/user.route')
const app=express();
app.use(express.json())
app.use('/posts',postRoute)
app.use('/comments',commentRoute)
app.use('/users',UserRoute)




const port = process.env.PORT|3000

app.listen(3000,()=>{

    console.log("running on localhost:"+port);
})