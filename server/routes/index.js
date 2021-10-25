let express = require('express');
let indexController = require('../controllers/index');
let router = express.Router();

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

//get route for login page 
router.get('/login', indexController.displayLoginPage);

//post route for processing login page 
router.post('/login', indexController.processLoginPage);

//get route for register page 
router.get('/register', indexController.displayRegisterPage);

//post route for processing register page 
router.post('/register', indexController.processRegisterPage);

//get to perform logout
router.get('/logout', indexController.performLogout);


module.exports = router;
