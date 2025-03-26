// routes/articles.js

const express = require('express');
const router = express.Router();

// Route for the Community article
router.get('/community', (req, res) => {
    res.render('articles/article0', { title: 'Acorn SH - Community Article', description: 'Building a community in decentralized computing.' });
});

// Route for the Network Effect article
router.get('/network-effect', (req, res) => {
    res.render('articles/article1', { title: 'Acorn SH - Network Effect Article', description: 'Cloud computing and network effects.' });
});

router.get('/decentralized-cloud', (req, res) => {
    res.render('articles/article2', { title: 'Acorn SH - Decentralized cloud Article', description: 'DePIN article about decentralized networks and device collaboration.' });
});

module.exports = router;
