//router page for posts
const express = require('express');
const router = express.Router();

//accessing the controller of posts
const postsController = require('../controllers/posts_controller') 

//Accessing the users profile page 
router.get('/',postsController.posts);
router.get('/edit',postsController.edit)



module.exports= router;