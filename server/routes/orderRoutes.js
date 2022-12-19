const  orderController  = require("../controllers/ordercontrollers");
const OrdersData1 = require('../models/laundarymodel')

const router = require("express").Router();
const {UserData,OrdersData} = OrdersData1

router.get("/order",orderController.getorderController)

router.post('/posts' , async (req ,res)=>{
    // post the data
    //console.log(req.body , "req body ")
    try{
        const {user, storelocation, city , shirts , tshirts , trousers , jeans , boxers , joggers , others} = req.body
        
        const data = await  OrdersData.create({
            user, storelocation, city , shirts , tshirts , trousers , jeans , boxers , joggers , others
        });

        console.log(data)
        res.status(200).json({
            status : "Sucess",
            user : data
        })

    }catch(e){
        res.status(400).json({
            status : "Failed",
            message : e.message
        })
    }
})

module.exports = router;