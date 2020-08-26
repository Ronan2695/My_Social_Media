//syntax for defining controller

//module.exports.actionName = function(req,res){

//}



//controller action for homepage
module.exports.home = function(req,res){

    return res.render('home',{
        title:'Social Media'
    })

}

//controller action for userspage
module.exports.about = function(req,res){

    return res.end('<h1>You are in the about page!</h1>');

}

module.exports.contact= function(req,res){

    return res.end('<h1>You are in the contact page!</h1>');

}