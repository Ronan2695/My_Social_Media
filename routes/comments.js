//router page for comments
const express = require('express');
const router = express.Router();
//for authentication purposes, we need to use passport
const passport = require('passport');

//accessing the controller of comment
const commentsController = require('../controllers/comments_controller');

//Route for creating comment. 
//We are adding passport middleware check, so that users who are signed in are only allowed to comment.
router.post('/create',passport.checkAuthentication, commentsController.create)

//deleting comments
router.get('/destroy/:id',passport.checkAuthentication,commentsController.destroy);



module.exports= router;