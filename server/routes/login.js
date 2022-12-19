const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const {UserData,OrdersData}= require("../models/laundarymodel");
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const secret = "RESTAPI";

// router.get('/',(req,res)=>{
//     res.send("OK")
// })

router.post('/', async (req,res)=>{
    console.log(req.body)
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email,phone, password} = req.body;
    let value;
    if(!email){
     value = await UserData.findOne({phone});
    }else{
     value = await UserData.findOne({email}); 
    }

    if(!value){
        return res.status(200).json({
            status:"FAILED",
            message: "User ID not found"
        })
    }

    bcrypt.compare(password, value.password, function(err, result) {
        console.log(value.password, password, result)
        if(err){
            return res.status(400).json({
                status : "Failed",
                message: err.message
            })
        }

        if(result){
            let token = jwt.sign({ id:value._id }, "mykey", { expiresIn: 3*24*60*60 });
            console.log(token)
              token = "test " + token 
            //   userInfo={...value._doc, token}
              return res.json({
                status:  "Success",
                token,
                name: value.name
            })
        }else{
            return res.status(200).json({
                status : "Failed",
                message: "Password do not match"
            })
        }
       

    });
    }catch (err){
        return res.status(200).json({
            status : "Failed",
            message: err.message
        })
    }
    
})

module.exports=router;