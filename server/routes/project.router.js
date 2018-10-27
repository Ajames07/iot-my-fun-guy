const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/add', (req, res) => {
    console.log('got to the server with:', req.body);
})

module.exports = router;