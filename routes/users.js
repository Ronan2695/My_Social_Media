//router page for users
const express = require('express');
const router = express.Router();

//accessing the controller of users
const usersController = require('../controllers/users_controller') 

//Accessing the users profile page 
router.get('/profile',usersController.profile);

//Accessing the edit page
router.get('/edit',usersController.edit)


module.exports= router;
