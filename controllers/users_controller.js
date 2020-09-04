//Controllers for user

//importing the model
const User= require('../models/users')

module.exports.profile=function(req,res){
    User.findById(req.params.id, function(err,user){
        return res.render('user_profile',{
            title:'profile',
            profile_user:user
        }); 
    });
}

module.exports.update = function(req,res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err,user){
            return res.redirect('back');
        });
    }else{
        return res.status(401).send('Unauthorized');
    }
}


//controller action for signup page.
module.exports.signUp= function(req,res){
   //if signed in, redirect to profile page
    if(req.isAuthenticated()){
       return res.redirect('/users/profile')
    }
    return res.render('user_sign_up', {
            title:'SocialMedia || Sign Up'
    });
}

//controller action for signin page.
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
      return res.redirect('/users/profile')
    }
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
    req.flash('success', 'Logged in sucessfully')
    return res.redirect('/');
}

//signing out
module.exports.destorySession= function(req,res){

    req.logout(); //passport gives this to request

    req.flash('success', 'Logged out sucessfully')
    return res.redirect('/');
}