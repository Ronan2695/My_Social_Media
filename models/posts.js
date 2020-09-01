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
    },
    //include the array of id's of all comments in this post schema itself
    comments:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'comment'
        }
    ]

},{
    timestamps: true
})

//We are telling that this is a model in the database
const Post= mongoose.model('Post',postSchema);

module.exports= Post
