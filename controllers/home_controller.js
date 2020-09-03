//syntax for defining controller

//module.exports.actionName = function(req,res){

//}

const Post = require('../models/posts');
const User = require('../models/users');

//controller action for homepage
// module.exports.home = function(req,res){

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:'Social_Media|Home',
    //         posts:posts
    //     });
    // });

    //populating the user object using populate function
module.exports.home = function(req,res){
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){

        User.find({}, function(err,users){
            return res.render('home',{
                title:'Social_Media|Home',
                posts:posts,
                all_users:users

             });
      
        });
    })
}

//controller action for userspage
module.exports.about = function(req,res){

    return res.end('<h1>You are in the about page!</h1>');

}

module.exports.contact= function(req,res){

    return res.end('<h1>You are in the contact page!</h1>');

}