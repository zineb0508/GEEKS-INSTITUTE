const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

router.get('/about', (req, res) => {
  res.send('About Us page');
});

module.exports = router;
