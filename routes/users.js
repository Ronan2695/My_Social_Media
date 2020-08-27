//router page for users
const express = require('express');
const router = express.Router();

//accessing the controller of users
const usersController = require('../controllers/users_controller') 

//Accessing the users profile page 
router.get('/profile',usersController.profile);

//router actions for signin and signup page.
router.get('/sign-in',usersController.signIn);
router.get('/sign-up',usersController.signUp);

//router action for signout
router.get('/sign-out',usersController.signOut);

//creating an user
router.post('/create', usersController.create);

router.post('/create-session', usersController.createSession)

module.exports= router;
