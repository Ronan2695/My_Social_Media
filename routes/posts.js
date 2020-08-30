//router page for posts
const express = require('express');
const router = express.Router();

//accessing the controller of posts
const postsController = require('../controllers/posts_controller') 

//Route for creating posts. 
router.post('/create', postsController.create)



module.exports= router;