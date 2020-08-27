//router page for users
const express = require('express');
const router = express.Router();

const passport= require('passport');

//accessing the controller of users
const usersController = require('../controllers/users_controller') 

//Accessing the users profile page 
router.get('/profile',usersController.profile);

// //router for signin and signup page.
router.get('/sign-in',usersController.signIn);
router.get('/sign-up',usersController.signUp);

//creating an user
router.post('/create', usersController.create);

//Use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
), usersController.createSession)

module.exports= router;
