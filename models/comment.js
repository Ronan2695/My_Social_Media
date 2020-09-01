const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    content:{
        
        type:String,
        require:true
    },

    //comment belongs to an user (Referencing User Model)
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    //Referencing Post model
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }

},{
    timestamps:true
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports=Comment;