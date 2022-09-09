const express=require('express');
const {addPost,getAllPosts,updatePost,deletePost,getPostByIdPost}=require('../controllers/post.controller');
const postRoute=express.Router();
//Create
postRoute.post('/',addPost)
//Read
postRoute.get('/',getAllPosts)
//Update
postRoute.patch('/:idpost',updatePost)
//Delete
postRoute.delete('/:idpost',deletePost)
postRoute.get('/:idpost',getPostByIdPost)

module.exports=postRoute