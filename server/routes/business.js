let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');

let passport = require('passport');
let businessController = require('../controllers/business');

//helper function
function requireAuth(req, res, next)
{
    //check if user logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//get route for business list page READ operation
router.get('/', businessController.displayBusinessList);

//get route for add page - CREATE operation
router.get('/add', requireAuth, businessController.displayAddPage);

//post route for processing add page - CREATE operation
router.post('/add', requireAuth, businessController.processAddPage);

//get route for displaying the edit page - UPDATE operation
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

//post route for processing the edit page - UPDATE operation
router.post('/edit/:id', requireAuth, businessController.processEditPage);

//get to perform deletion - DELETE operation
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;

