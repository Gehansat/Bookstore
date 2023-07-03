const User = require("../model/User")

const getUsers = async (req,res,next)=>{
    let user;
    try{
        user = await User.find();
    }
    catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(404).json({message : "Error fetching the users "});
    }
    return res.status(200).json({ user });
}

const addUsers = async (req,res,next)=>{
    let user;
   try{
        user = new User ({
        name : req.body.name,
        age : req.body.age,
        address : req.body.address,
        skill : req.body.skill,
    })
    await user.save();
   }catch(err){
    console.log(err);
   }
   if(!user)
   return res.status(500).json({ message : "Error adding a new book "});
   return res.status(201).json({ user});
}

const updateUser = async(req,res,next)=>{
    const id = req.params.id;
    const { name ,age,address,skill } = req.body;

    let user;
    try{
        user = await User.findByIdAndUpdate(id,{
            name,
            age,
            address,
            skill
        })
        await user.save();
    }catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(404).json({message : "Error updating a user "});
    }
    return res.status(200).json({user });
}

const deleteUser= async (req,res,next)=>{
    const id = req.params.id;
    let duser;
    try{
        duser = await User.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!duser){
        return res.status(404).json({ message : "Error deleting user "});
    }
    return res.status(200).json({message:"Successfully Deleted User "});
}

exports.getUsers = getUsers;
exports.addUsers = addUsers;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;