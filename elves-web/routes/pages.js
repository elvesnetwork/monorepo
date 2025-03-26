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
router.get('/main', (req, res) => {
    const error = req.query.error || null;
    res.render('pages/main', { 
        title: 'Acorn SH - Register/Login', 
        description: 'Create your account for Acorn SH services',
        error
    });
});


// Route for the members page (login/signup)
router.get('/members', (req, res) => {
    const error = req.query.error || null;
    res.render('pages/members', { 
        title: 'Acorn SH - Register/Login', 
        description: 'Create your account for Acorn SH services',
        error
    });
});

// Route for the account page, accessible only if authenticated
router.get('/account', isAuthenticated, (req, res) => {
    const error = req.query.error || null;
    res.render('pages/account', { 
        title: 'Acorn SH - Account', 
        description: 'Your account page',
        error,
        user: req.user
    });
});

// Route for the careers page
router.get('/careers', (req, res) => {
    res.render('pages/careers', { 
        title: 'Acorn SH - Careers', 
        description: 'Join us to build the decentralized and distributed internet'
    });
});

// Route for the hosting page
router.get('/hosting', (req, res) => {
    res.render('pages/hosting', { 
        title: 'Acorn SH - My Projects', 
        description: 'View and manage your projects on Acorn SH'
    });
});

// Route for the storage project page
router.get('/storage', (req, res) => {
    res.render('pages/storage', { 
        title: 'Acorn SH - Storage', 
        description: 'Upload files to Acorn SH storage'
    });
});

// Route for the rpc project page
router.get('/rpcs', (req, res) => {
    res.render('pages/rpcs', { 
        title: 'Acorn SH - Networks', 
        description: 'Start a new project with Acorn SH'
    });
});

// Route for the download page
router.get('/download-page', (req, res) => {
    res.render('pages/download-page', { 
        title: 'Acorn SH - Download Client', 
        description: 'Download Acorn SH client'
    });
});

// Route for the whitepaper page
router.get('/whitepaper', (req, res) => {
    res.render('pages/whitepaper', { 
        title: 'Acorn SH - Whitepaper', 
        description: 'Learn more from our whitepaper'
    });
});

// Route for the tutorials page
router.get('/tutorials', (req, res) => {
    res.render('pages/tutorials', { 
        title: 'Acorn SH - Tutorials', 
        description: 'Learn more from our experts'
    });
});

// Route for the quick start page
router.get('/quick-start', (req, res) => {
    res.render('pages/quick-start', { 
        title: 'Acorn SH - Quick Start', 
        description: 'Install in 3 simple steps'
    });
});

module.exports = router;