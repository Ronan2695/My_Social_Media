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
    //Finding a post the executing a query.
    //First posts will get executed and then users will get executed.
    //handling errors using catch
module.exports.home = async function(req,res){
    //error catching
    try{
        //populate the user of each post
        let posts=await Post.find({})
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        })
        
        let users=await User.find({});
    
        return res.render('home',{
            title:'Social_Media|Home',
            posts:posts,
            all_users:users
        
        });

    }catch(err)
    {
        console.log('Error',err)
        return
    }
       
}

//controller action for userspage
module.exports.about = function(req,res){

    return res.end('<h1>You are in the about page!</h1>');

}

module.exports.contact= function(req,res){

    return res.end('<h1>You are in the contact page!</h1>');

}