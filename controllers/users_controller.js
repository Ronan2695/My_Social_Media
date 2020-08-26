//Controllers for user

module.exports.profile=function(req,res){

    return res.render('user_profile',{

        title:'profile'
    });
}

module.exports.edit= function(req,res){
    
    return res.end('<h1> Welcome to the edit page </h1>')
    
}