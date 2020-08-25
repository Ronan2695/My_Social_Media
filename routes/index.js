//Index of routes.

//Express is required or called only once
const express = require ('express');
const router = express.Router();
const homeController= require('../controllers/home_controller')

console.log('router loaded')

//accessing the controller
router.get('/',homeController.home)
router.get('/about',homeController.about)
//requiring the users routes.
router.use('/users', require('./users '));

//for any further routes, access from here //syntax
//router('/routerName', require('./routerfile'));




//Exporting this, since it should be available to index.js
module.exports = router