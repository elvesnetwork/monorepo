const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Ray Cluster!');
});

app.listen(port, () => {
  console.log(`Web app listening at http://localhost:${port}`);
});