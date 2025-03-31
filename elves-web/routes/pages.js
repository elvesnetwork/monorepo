// /route/pages.js

const express = require('express');
const router = express.Router();

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/pages/members?error=Please login to access this page');
  }
};

// Route for the members page (login/signup)
router.get('/intro', (req, res) => {
    const error = req.query.error || null;
    res.render('pages/introduction', { 
        title: 'Elves - Introduction', 
        description: ' Introduction to Elves services',
        error
    });
});


// Route for the members page (login/signup)
router.get('/members', (req, res) => {
    const error = req.query.error || null;
    res.render('pages/members', { 
        title: 'Elves - Register/Login', 
        description: 'Create your account for Elves services',
        error
    });
});


// Route for the account page, accessible only if authenticated
router.get('/account', isAuthenticated, (req, res) => {
    const error = req.query.error || null;
    res.render('pages/account', { 
        title: 'Elves - Account', 
        description: 'Your account page',
        error,
        user: req.user
    });
});


// Route for the careers page
router.get('/careers', (req, res) => {
    res.render('pages/careers', { 
        title: 'Elves - Careers', 
        description: 'Join us to build the decentralized and distributed internet'
    });
});


// Route for the download page
router.get('/download-page', (req, res) => {
    res.render('pages/download-page', { 
        title: 'Elves - Download', 
        description: 'Download Elves SH client'
    });
});


// Route for the quick start page
router.get('/quick-start', (req, res) => {
    res.render('pages/quick-start', { 
        title: 'Elves - Quick Start', 
        description: 'Install in 3 simple steps'
    });
});

module.exports = router;