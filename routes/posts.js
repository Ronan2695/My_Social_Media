//router page for posts
const express = require('express');
const router = express.Router();
//for authentication purposes, we need to use passport
const passport = require('passport');

//accessing the controller of posts
const postsController = require('../controllers/posts_controller') 

//Route for creating posts. 
//We are adding passport middleware check, so that users who are signed in are only allowed to post.
router.post('/create',passport.checkAuthentication, postsController.create)



module.exports= router;