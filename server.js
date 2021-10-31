'use strict';
// This file contains all the server configurations 

// Initializing
const express = require('express');
const app = express();
require('dotenv').config();

// Requiring
const errorHandler_404 = require('./handlers/404');
const errorHandler_500 = require('./handlers/500');
const stamper = require('./middleware/stamper');

// Defining the port environmental variable
const PORT = process.env.PORT || 3001;
function start() {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
}

// Proof of life
app.get('/', (req, res) => {
    res.send('running successfully');
})

app.get('/data', stamper, (req, res) => {
    let dataObject = {
        color: "black",
        value: "#000",
        "time": req.timestamp
    }
    res.status(200).json(dataObject);
})

app.get('/bad', (req, res, next) => {
    // next('You\'ve Made An Error'); // a method that calls the next middleware; the 500 handler
    throw new Error('You\'ve Made An Error');
})
// Middle-wares
// 404 not found middleware - handling access to a non-existing route/path
app.use('*', errorHandler_404);
// handling 500 server error 
app.use(errorHandler_500);

module.exports = { app, start };