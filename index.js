const express = require('express');
const app= express();
const port = 8000;

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