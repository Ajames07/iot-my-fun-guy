const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/add', (req, res) => {
    const query = `INSERT INTO "project" ("person_id", "devices_id", "project_name", "project_location", "date_started")
                    VALUES ($1, $2, $3, $4, $5, $6);`;
    res.send(201);
});

module.exports = router;