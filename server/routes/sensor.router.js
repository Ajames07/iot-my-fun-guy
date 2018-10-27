const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// retrieves GET data from readings
router.get('/', ( req , res ) => {
    const queryText = 'SELECT * FROM readings ORDER BY date DESC';
    pool.query(queryText)
    .then((results) => { res.send(results.rows); 
    })//error handling
    .catch((error) => {
        console.log('Error completing SELECT readings query', error);
        res.sendStatus(500);
    });//end error handling
});//end router GET readings

router.get('/:id', ( req , res ) => {
    const queryText = 'SELECT * FROM readings WHERE id =$1';
    pool.query(queryText, [req.params.id])
    .then((results) => { res.send(results.rows); 
    })//error handling
    .catch((error) => {
        console.log('Error completing SELECT reading query', error);
        res.sendStatus(500);
    });//end error handling
});//end router GET

// manulally entered readings data POST to server
router.post('/', ( req , res ) => {
    console.log(req.body);
    const newSensorData = req.body;
    const queryText =`INSERT INTO readings ("temperature","humidity")
                        Values ($1,$2)`;
    pool.query(queryText, [newSensorData.temperature,newSensorData.humidity])
    .then((results) => {
       res.sendStatus(200);
    })//error handling
    .catch((error) => {
        console.log('error making POST request', error);
        res.sendStatus(500);
    });//end error handling
});//end router.post

// edit data stored in server PUT route
router.put('/:id', ( req , res ) => {
    const updatedSensorData = req.body;
    const queryText = `UPDATE readings 
    SET "temperature" = $1,
    "humidity" = $2
    WHERE id = $3;`;

    const queryValues = [
        updatedSensorData.temperature,
        updatedSensorData.humidity,
        req.params.id,
    ];

    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); 
    })//error handling
    .catch((error) => {
        console.log('Error completing SELECT readings', error);
        res.sendStatus(500);
    });//end error handling
});//end edit data PUT route

//deletes data from readings table
router.delete('/:id', ( req , res ) => {
    console.log('delete Sensor data with id: ', req.body);
    const queryText = 'DELETE FROM readings WHERE id = $1';
    pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); 
    })//error handling
    .catch((error) => {
        console.log('Error completing DELETE reading query', error);
        res.sendStatus(500);
    });//end error handling
});//end delete data route

module.exports = router;