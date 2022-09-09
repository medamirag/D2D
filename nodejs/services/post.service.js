require('../db/db')
const res = require('express/lib/response');
const Post= require('../models/post.model');
const { post } = require('../routes/post.route');
const addPostService = (text) => {
    console.log("called");
    const post=new Post({
        text:text
    }).save();
    return post;
}

const getAllPostsService = () => {
    // const posts=Post.find().then((data)=>{console.log("called"); return(data)}).catch((err)=>{return("error")});
    const posts=Post.find();
    return posts;

}

const updatePostService =async (idPost,data) => {
const post =await Post.updateOne({_id:idPost},{ $set: data})
return "ok"
}
const getPostByIdPostService = async (idPost) => {
    const post = await Post.findById({_id : idPost})
    return post
    // Post.findById({_id : idPost}).then((err,data)=>{
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

const deletePostService =async (idPost) => {
    const post = await Post.findOneAndDelete({ _id: idPost });
    return "deleted"

}
 

module.exports = { addPostService, getAllPostsService, updatePostService, getPostByIdPostService,deletePostService }