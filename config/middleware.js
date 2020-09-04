//Custom Middleware for displaying flash messages
//to pass the flash messages as response to ejs template, we create a custom middleware.
module.exports.setFlash = function(req,res,next){
    res.locals.flash={
        'success': req.flash('success'),
        'error': req.flash('error')
    }
    next();
}