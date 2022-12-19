const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { UserData } = require("../models/laundarymodel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const secret = "RESTAPI";

// router.get('/',(req,res)=>{
//     res.send("OK")
// })
const handleError = (err) => {
    if (err.code === 11000) {
            err.email = 'that email is already registered';
            return err;
        }
    return err
    }

router.get("/",  async (req, res) => {
  const result = await UserData.find();
  try {
    res.json({
      result,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});
router.post("/",body("email").isEmail(),body("password").isLength({min: 5, max: 20}), async (req, res) => {
  try {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({ errors: errors.array() });
    }

    const { name, email, phone, password, state, district, address, pincode } =
      req.body;
    bcrypt.hash(password, 10, async function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        res.status(500).json({
          status: "Failed",
          message: err.message,
        });
      }

    //   console.log("abc",hash)
    //   res.send("ok")
      try {
        const result = await UserData.create({
          name,
          email,
          phone,
          password: hash,
          state,
          district,
          address,
          pincode,
        });
        console.log("result",result)
        res.status(200).json({
          status: "Success",
          message: "Registration Successful",
          result,
        });
      } catch (err) {
        const errors = handleError(err);
        console.log(err)
        res.status(200).json({
          status: "Failed from adding",
         errors
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
});

module.exports = router;
