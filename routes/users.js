//router page for users
const express = require('express');
const router = express.Router();

//accessing the controller of users
const usersController = require('../controllers/users_controller') 

//Accessing the users profile page 
router.get('/profile',usersController.profile);

// //router for signin and signup page.
router.get('/sign-in',usersController.signIn);
router.get('/sign-up',usersController.signUp);

//creating an user
router.post('/create', usersController.create);

module.exports= router;
