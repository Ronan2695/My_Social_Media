//Controllers for user

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


