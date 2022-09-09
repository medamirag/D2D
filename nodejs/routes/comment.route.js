const express=require('express');
const {addComment,getAllCommentsByPost,updateComment,deleteCommentByPost,getCommentByIdComment}=require('../controllers/comment.controller');
const commentRoute=express.Router();
//Create
commentRoute.post('/',addComment)
//Read
commentRoute.get('/:idpost',getAllCommentsByPost)
//Update
commentRoute.patch('/:idcomment',updateComment)
//Delete
commentRoute.delete('/:idcomment',deleteCommentByPost)
commentRoute.get('/:idcomment',getCommentByIdComment)

module.exports=commentRoute