const { addCommentService, getAllCommentsByPostService, updateCommentService, getCommentByIdCommentService,deleteCommentByPostService } = require('../services/comment.service')

const addComment =async(req,res)=>{
console.log(req.body);
    res.send(await addCommentService(req.body));
}

const getAllCommentsByPost =async (req,res)=>{
res.send(await getAllCommentsByPostService(req.params['idpost']));
}
const getCommentByIdComment =async (req,res)=>{

    const idComment=req.params['idcomment']
    
res.send(await getCommentByIdCommentService(idComment));
}

const updateComment =(req,res)=>{
    const idComment=req.params['idcomment']
    res.send(updateCommentService(idComment,req.body));
}

const deleteCommentByPost =(req,res)=>{
    const idComment=req.params['idcomment']
    res.send(deleteCommentByPostService(idComment));
}






module.exports={addComment,getAllCommentsByPost,updateComment,deleteCommentByPost,getCommentByIdComment};