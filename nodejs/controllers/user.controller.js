const addUserService =require('../services/user.service')
const addUser =async(req,res)=>{

    res.send(await addUserService(req.body));
}
module.exports = addUser