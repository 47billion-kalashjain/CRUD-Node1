const mongoose = require('mongoose');
const User = require('../models/userModel')

const createUser = async (req, res) => {
   try{
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
   }
   catch(err){
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
   }
}
const deleteUser = async (req, res) => {
    const id =req.params.id;
    try{
        const user = await User.deleteOne({_id:id});
        console.log(user);
        res.status(201).json({"msg":"user deleted Succesfully"});

    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}
const getUsers = async (req,res)=>{
    try{
        const allUsers = await User.find();
        console.log(allUsers);
        res.status(201).json(allUsers);

    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}
const findUserbyId = async(req, res) => {
    const id =req.params.id;
    console.log(id);
    try{
        const user = await User.findById({_id:id});
        console.log(user);
        res.status(201).json(user);

    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}
const filterbycity = async(req, res) => {
    const city =req.params.city;
    console.log(city);
    try{
        const user = await User.find({city});
        console.log(user);
        res.status(201).json(user);

    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports={createUser,deleteUser,findUserbyId,filterbycity,getUsers};