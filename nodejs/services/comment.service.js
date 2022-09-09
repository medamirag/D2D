require('../db/db')
const res = require('express/lib/response');
const Comment= require('../models/comment.model');
const { comment } = require('../routes/comment.route');
const addCommentService = (comm) => {
    console.log("called");
    const comment=new Comment(comm).save();
    return comment;
}

const getAllCommentsByPostService = (postid) => {
    // const comments=Comment.find().then((data)=>{console.log("called"); return(data)}).catch((err)=>{return("error")});
    const comments=Comment.find({postid : postid});
    return comments;

}

const updateCommentService =async (idComment,data) => {
const comment =await Comment.updateOne({_id:idComment},{ $set: data})
return "ok"
}
const getCommentByIdCommentService = async (idComment) => {
    console.log(idComment);
    const comment = await Comment.findById({_id : idComment})
    console.log(comment);
    return comment
    // Comment.findById({_id : idComment}).then((err,data)=>{
    // if(err){
    //     console.log("called");
    //     return "error"
    // }
    // else{
    //     console.log("called");

    //     return data
    // }
    // })
}

const deleteCommentByPostService =async (idPost) => {
    const comment = await Comment.findOneAndDelete({ postid: idPost });
    return "deleted"

}
 

module.exports = { addCommentService, getAllCommentsByPostService, updateCommentService, getCommentByIdCommentService,deleteCommentByPostService }