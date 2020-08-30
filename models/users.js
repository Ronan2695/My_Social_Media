//User Schema for login.
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
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


//We are telling that this is a model in the database
const User= mongoose.model('User',userSchema)

module.exports=User