const router = require("express").Router();
const dummyControllers= require("../controllers/dummycontrollers")

router.get("/getusers",dummyControllers.getusers)
router.post("/getusers",dummyControllers.postUsers)
router.get("/getorders",dummyControllers.getorders)
router.post("/getorders",dummyControllers.postOrders)

module.exports=router;