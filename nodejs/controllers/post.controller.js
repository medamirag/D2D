const { addPostService, getAllPostsService, updatePostService, getPostByIdPostService,deletePostService } = require('../services/post.service')

const addPost =async(req,res)=>{

    res.send(await addPostService(req.body.text));
}

const getAllPosts =async (req,res)=>{
res.send(await getAllPostsService());
}
const getPostByIdPost =async (req,res)=>{

    const idPost=req.params['idpost']
    
res.send(await getPostByIdPostService(idPost));
}

const updatePost =(req,res)=>{
    const idPost=req.params['idpost']
    res.send(updatePostService(idPost,req.body));
}

const deletePost =(req,res)=>{
    const idPost=req.params['idpost']
    res.send(deletePostService(idPost));
}






module.exports={addPost,getAllPosts,updatePost,deletePost,getPostByIdPost};