const express = require('express');
const app= express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose')

//Setting up the static file
app.use(express.static('./assets'));

//using the express layout module
app.use(expressLayouts);

//extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use Express Router(Middleware)
app.use('/', require('./routes/index'))
//configuring our view engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, function(err){
//Interpolation is being used here to print success and failure messages.
    if(err)
    {
        console.log(`Error in running the server: ${err}`)
    }
    
    console.log(`Server is running on port:${port}`)
})