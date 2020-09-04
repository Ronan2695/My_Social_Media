//Controller for posts.
const Post = require('../models/posts');
const Comment = require('../models/comment');

//changed posts creation code to async await
module.exports.create=async function(req,res){

    try{
        await Post.create({

            content: req.body.content,
            user:req.user._id
    
        });
        return res.redirect('back');

    }catch(err)
    {
        console.log('Error in creating post', err)
        return
    }   
  
}

//Post deletion controller
//changing the code to async await to reduce complexity

module.exports.destroy= async function(req,res){
    
    let post = await Post.findById(req.params.id);

    try{
         //.id means converting the object id into string.
        //Checking if current users are same
        // console.log(req.params.id);
        if(post.user == req.user.id){
            post.remove();
         await Comment.deleteMany({post:req.params.id});
         return res.redirect('back');
        }else{
            return res.redirect('back')
        }
    }catch(err){
        console.log('Error in creating post', err)
        return
     }
    
}

