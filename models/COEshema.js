const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt=require("bcryptjs");

const COESchema=new mongoose.Schema({

    Name:{
        type: 'string',
        required: true,
        trim: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('not a valid email address');
            }
        }
    },
    mobile:{
        type:Number,
        required: true,
        maxLength:10
    },
    password:{
        type:String,
        required: true
    },
    cpassword:{
        type:String,
        required: true
    },
   
});

//to hash password before saving, w need to put a middleware 
//pre function takes two argumnets ("fn before which we need to call",next())
COESchema.pre("save", async function (next) {
    if (this.isModified("password")) {
           //salt is used to hash password, higher the salt ,more the password will be stronger and ,more time it take to resolve
        this.password = await bcrypt.hash(this.password, 12);//it is hashed with salt 12
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});


const Coe=new mongoose.model("Coe",COESchema);
module.exports=Coe;