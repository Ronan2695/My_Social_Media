//User Schema for login.
const mongoose = require('mongoose');

const userSchmema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    //This will give you the created at and updated at time.
    timestamps: true
});

const User= mongoose.model('User',userSchmema)

module.exports=User