const cron = require('node-cron');
const axios = require('axios');
const express = require('express');
const pool = require('./modules/pool');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const sensorDataForm = require('./routes/sensor.router');
const projectRouter = require('./routes/project.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/sensor', sensorDataForm);
app.use('/api/project', projectRouter);
// Serve static files
app.use(express.static('build'));

// Serve static files
app.use(express.static('build'));

//device connection
// Make a request for data every 1 minute
cron.schedule('*/1 * * * *', function () {
  console.log('running a task every 1 minutes');
  particleData();
});//end cron.schedule

//run the server once when the device boots up
particleData();

function particleData() {
  axios.get(`https://api.spark.io/v1/devices/${process.env.DEVICE_ID}/result?access_token=${process.env.TOKEN}`).then(function (response) {
    // TODO: Save results in the database
    const newSensorData = JSON.parse(response.data.result);
    console.log(newSensorData);
    // INSERT INTO using a pg pool
    const queryText = `INSERT INTO readings ("temperature","humidity")
    Values ($1,$2)`;
    pool.query(queryText, [newSensorData.temp, newSensorData.humidity])
      .then((results) => {
      })//error handling
      .catch((error) => {
        console.log('error making POST request', error);
      });
  })//error handling
  .catch(function (error) {
    console.log(error);
  });//end error handling
};//end particaleData

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});//end listen
