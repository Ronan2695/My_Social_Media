//requiring passport
const passport = require('passport');
//requiring passport strategy
const LocalStrategy = require('passport-local').Strategy
//importing user
const User = require('../models/users');

//authentication using passport

passport.use(new LocalStrategy({

    usernameField:'email',
    },
    function(email,password,done){
        //find a user and establish the identity
        User.findOne({email:email}, function(err,user){
            
            if(err)
            {
                console.log('Error in finding user');
                return done(err)
            }
            if(!user || user.password != password){
                console.log('Inavalid Username and password')
                return done('null', 'false');
            }

            return done(null,user)

        });

    }

))

//serializing the user to decide which key is to be kept in the cookies.

passport.serializeUser(function(user,done){

    done(null,user.id);

});



//Deserializing the user, from the key in the cookies.

passport.deserializeUser(function(id,done){

    User.findById(id,function(err,user){
        if(err)
        {
            console.log('Error in finding user')
            return done(err);  
        }

        return done(null,user);
    });

});

module.exports=passport