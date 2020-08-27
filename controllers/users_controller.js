//Controllers for user

//importing the model
const User= require('../models/users')

module.exports.profile=function(req,res){

    return res.render('user_profile',{

        title:'profile'
    });
}

// //controller action for signup page.
module.exports.signUp= function(req,res){
    return res.render('user_sign_up', {
            title:'SocialMedia || Sign Up'
    });
}

//controller action for signin page.
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:'SocialMedia | Sign In'
    });
}

//getting the signup data
module.exports.create= function(req,res){
    //checking if confirm password and password are same
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
   //checking if the user exists already by comparing the email in the database.
    User.findOne({email:req.body.email}, function(err,user){
        if(err){
            console.log('Error in finding user signing up');
                return;
        }

        if(!user){
            User.create(req.body, function(err,user){
                if(err)
                {
                    console.log('Error in creating user while signing up');
                        return;
                }
                return res.redirect('/users/sign-in')
              })
        }else{
            return res.redirect('back');
        }
    });
} 

//signing in and creating a session
module.exports.createSession= function (req,res){
    //steps to authenticate
    //find the user
   
    User.findOne({email:req.body.email}, function(err,user){

        if(err){
            console.log('Error in finding user signing in');
                return;
        }
         //handle user found
         if(user){

            //handle password which don't match
            if(user.password != req.body.password){
                    return res.redirect('back');
            }

            //handle session creation
            //we are setting and returning a cookie from the browser.
            res.cookie('user_id',user.id)
            return res.redirect('/users/profile');

         }

         else{
            //handle user not found
            return res.redirect('back')
         }

    })
   
}
