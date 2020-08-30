// Schema for posts

const mongoose = require('mongoose');

const postSchema =  new mongoose.Schema({

    content:{
        type:String,
        require: true
    },

    //We are referring to the ObjectId of the user in the users Schems(users.js)
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

},{
    timestamps: true
})

//We are telling that this is a model in the database
const Post= mongoose.model('Post',postSchema);

module.exports= Post
