const express = require('express');
const env= require('./config/environment')
//for logging
const logger = require('morgan')
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
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle= require('./config/passport-google-oauth2-strategy')

const MongoStore = require('connect-mongo')(session);
//Notification message.
const flash= require('connect-flash');
const customMware = require('./config/middleware');

//Setup the chat-server to be used with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('Chat server is listening on port 5000')
 const path=require('path');

app.use(express.urlencoded());

app.use(cookieParser());

//Setting up the static file
console.log(path.join(__dirname , env.asset_path))
app.use(express.static(path.join(__dirname , env.asset_path)));
//make the uploads path available to the browser
app.use('/uploads',express.static(__dirname + '/uploads'));

//Logger
app.use(logger(env.morgan.mode, env.morgan.options));

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
    secret:env.session_cookie_key,
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
//flash messages
app.use(flash());
app.use(customMware.setFlash)

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

//mongo network error,..this error u faced earlier also?, no, this is the first time
//try running in development modeo once..
//it comes because the server takes time to start..thets why its connection time out..pls check ur internet connection
//My internet connection is good, I will try troubleshooting this mongodb error and get back to you
//okay sure..thank you..np