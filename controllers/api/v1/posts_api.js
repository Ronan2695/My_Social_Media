const Post=require('../../../models/posts')
const Comment = require('../../../models/comment');
//displaying the list of posts from the DB in JSON format
module.exports.index =async function(req,res){
    

    let posts=await Post.find({})
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        });

   return res.json(200,{
       message:"List of Posts",
       posts:posts
   })
}

//Deleting the POSTS using API, withoutb authentication

module.exports.destroy= async function(req,res){
    
    let post = await Post.findById(req.params.id);

    try{
         //.id means converting the object id into string.
        //Checking if current users are same
        // console.log(req.params.id);
        
        // if(post.user == req.user.id){
            post.remove();
         await Comment.deleteMany({post:req.params.id});

         return res.json(200,{
             message:"Post and associated comments deleted successfully"
         })
        // }else
        // {   
        //     req.flash('error', 'Action cannot be performed')
        //     return res.redirect('back')
        // }
    }catch(err)
    { console.log('****',err)
          return res.json(500,{
            message:"Internal Server Error"
        })
     }
    
}
