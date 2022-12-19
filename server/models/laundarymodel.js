const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema

const UserSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        minlength: 5,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
})


//order Schema

const OrdersSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserData"
    },
    storelocation:{
        type:String,
        required:true,
    },
    city:{
        type:String,
    },
    shirts:{
        quantity:{type:Number,default:0},
        washing:{type:Boolean,default:false},
        ironing:{type:Boolean,default:false},
        drycleaning:{type:Boolean,default:false},
        chemicalcleaning:{type:Boolean,default:false},
    },
    tshirts:{
        quantity:{type:Number,default:0},
        washing:{type:Boolean,default:false},
        ironing:{type:Boolean,default:false},
        drycleaning:{type:Boolean,default:false},
        chemicalcleaning:{type:Boolean,default:false},
    },
    trousers:{
        quantity:{type:Number,default:0},
        washing:{type:Boolean,default:false},
        ironing:{type:Boolean,default:false},
        drycleaning:{type:Boolean,default:false},
        chemicalcleaning:{type:Boolean,default:false},
    },
    jeans:{
        quantity:{type:Number,default:0},
        washing:{type:Boolean,default:false},
        ironing:{type:Boolean,default:false},
        drycleaning:{type:Boolean,default:false},
        chemicalcleaning:{type:Boolean,default:false},
    },
    boxers:{
        quantity:{type:Number,default:0},
        washing:{type:Boolean,default:false},
        ironing:{type:Boolean,default:false},
        drycleaning:{type:Boolean,default:false},
        chemicalcleaning:{type:Boolean,default:false},
    },
    joggers:{
        quantity:{type:Number,default:0},
        washing:{type:Boolean,default:false},
        ironing:{type:Boolean,default:false},
        drycleaning:{type:Boolean,default:false},
        chemicalcleaning:{type:Boolean,default:false},
    },
    others:{
        quantity:{type:Number,default:0},
        washing:{type:Boolean,default:false},
        ironing:{type:Boolean,default:false},
        drycleaning:{type:Boolean,default:false},
        chemicalcleaning:{type:Boolean,default:false},
    }

},{timestamps:true})

const UserData = mongoose.model("Userdata",UserSchema);
const OrdersData = mongoose.model("OrderData",OrdersSchema);
module.exports={UserData,OrdersData};