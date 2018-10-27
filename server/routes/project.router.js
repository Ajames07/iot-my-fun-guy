const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/current', (req, res) => {
    const query = `SELECT * FROM "projects" WHERE "complete" = 'false' ORDER BY "date_started" DESC;`;
    pool.query(query).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR getting current projects:', error);
        res.sendStatus(500);
    });
})

router.get('/previous', (req, res) => {
    const query = `SELECT * FROM "projects" WHERE "complete" = 'true' ORDER BY "date_started" DESC;`;
    pool.query(query).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR getting current projects:', error);
        res.sendStatus(500);
    });
})

router.post('/add', (req, res) => {
    const query = `INSERT INTO "projects" ("person_id", "project_name", "project_location", "date_started")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [req.user.id, req.body.name, req.body.location, req.body.date]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR adding project:', error);
        res.sendStatus(500);
    });
});


//route to get single projects details
router.get('/details/:id', (req, res) => {
    const projectId = parseInt(req.params.id);
    
    console.log('projectId', projectId);
    
    const query = `SELECT * FROM projects WHERE "id" = $1;`;

    pool.query(query, [projectId])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('error getting project details', error);
            res.sendStatus(500);
        });

});

module.exports = router;