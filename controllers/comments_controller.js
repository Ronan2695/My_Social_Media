// const Comment = require('../models/comment');
// const Post = require('../models/posts');
// const commentsMailer = require('../mailers/comments_mailer')

// module.exports.create= function(req,res){
//    Post.findById(req.body.post, function(err,post){ 
//         //if post is found(the post id is being passed here)
//         if(post)
//         {
//             Comment.create({

//                 content:req.body.content,
//                 post:req.body.post,
//                 user:req.user._id

//             },function(err, comment){
//                 //pushing the comment id 
//                 post.comments.push(comment);
//                 post.save();
//                 res.redirect('/');
//             });

//         }
      
//     });
    
// }   

const Comment= require('../models/comment');
const Post = require('../models/posts');
// const { createPrivateKey } = require('crypto');
//Controller mailer action
const commentsMailer = require('../mailers/comments_mailer')
// const queue = require('../config/kue');
// const commentsEmailWorker = require('../workers/comment_email_worker');

//posting a comment
module.exports.create =async function(req,res){

    try{
        let post = await Post.findById(req.body.post);

        if (post){

            let comment = await Comment.create({
                content: req.body.content,
                post:req.body.post,
                user: req.user._id           
            });

            post.comments.push(comment);
            post.save();

                comment = await comment.populate('user', 'name email').execPopulate();
                commentsMailer.newComment(comment);
            if(req.xhr){

                    return res.status(200).json({

                        data:{

                            comment: comment
                        },

                        message: "Post created!"
                    });
            }

            req.flash('success', 'Comment Published');

            res.direct('/')
        }

    }catch(err){

        req.flash('error', err);
        return;
    }
}





//Deleting Comments
module.exports.destroy = function(req,res){
    Comment.findById(req.params.id, function(err,comment){
        if(comment.user == req.user.id){
            let postId = comment.post;
            comment.remove();
            Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.id}}, function(err,post){
                return res.redirect('back');
            })
        }else{
            return redirect('back'); 
        }
    })
}