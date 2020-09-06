//User Schema for login.
const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
//Path to stored files
const AVATAR_PATH = path.join('/uploads/users/avatars');

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
    },
    avatar:
    {
        type:String,

    }
},{
    //This will give you the created at and updated at time.
    timestamps: true
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });

  //static methods
  //single specifies only one file is going to be sent
  userSchema.statics.uploadedAvatar = multer({storage:storage}).single('avatar')
  userSchema.statics.avatarPath = AVATAR_PATH;


//We are telling that this is a model in the database
const User= mongoose.model('User',userSchema)

module.exports=User