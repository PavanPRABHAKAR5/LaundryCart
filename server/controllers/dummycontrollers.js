const {UserData,OrdersData}= require("../models/laundarymodel");

module.exports.getusers=async (req,res)=>{
    const data=await UserData.find();
    res.json(data);
}
module.exports.getorders=async (req,res)=>{
    const data=await OrdersData.find();
    res.json(data);
}
module.exports.postUsers=async (req,res)=>{
    const data=await UserData.create(req.body);
    res.json(data);
}
module.exports.postOrders=async (req,res)=>{
    const data=await OrdersData.create(req.body);;
    res.json(data);
}
