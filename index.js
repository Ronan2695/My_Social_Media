const express = require('express');
//for creating cookies
const cookieParser = require('cookie-parser');
const app= express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//used for session cookie
const session = require('express-session');
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());

app.use(cookieParser());

//Setting up the static file
app.use(express.static('./assets'));

//using the express layout module
app.use(expressLayouts);

//extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//configuring our view engine
app.set('view engine', 'ejs');
app.set('views','./views');

//encrypting the cookie
//mongo store is used to store the session cookie in the DB.
app.use(session({
    name:'codeial',
    //todo change secret before deploying.
    secret:'blahsomething',
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: new MongoStore(
        {
        
            mongooseConnection: db,
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok')
        }
    )
}));

//telling the app to use passport
app.use(passport.initialize())
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//use Express Router(Middleware)
app.use('/', require('./routes/index'))

app.listen(port, function(err){
//Interpolation is being used here to print success and failure messages.
    if(err)
    {
        console.log(`Error in running the server: ${err}`)
    }
    
    console.log(`Server is running on port:${port}`)
});