const {UserData,OrdersData}= require("../models/laundarymodel");
var jwt = require('jsonwebtoken');

module.exports.reqAuth=async (req, res, next) => {
  //console.log(req.headers)
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({
        "status": "no authorization",
        "message": "authorisation token missing"
      })
    }
    const token = req.headers.authorization.split("test ")[1];
    console.log("token from auth",token)
    jwt.verify(token, 'mykey', async function (err, decoded) {
      if (err) {
       return res.status(500).json({
          status: "failed",
          message: "Not Authenticated"
        })
      }
      console.log("decoded",decoded)
       const user = await UserData.findOne({ _id: decoded.id });
       req.body.user = user._id;
       console.log("from create",req.body.user);
      next();
    });
  }