// routes/index.js

const express = require('express');
const router = express.Router();

// Render the main index page
router.get('/', (req, res) => {
    res.render('index-chat');
});

router.get('/main', (req, res) => {
    res.render('index-main');
});
module.exports = router;
