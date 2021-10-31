'use strict';
// Server starting point

/* Two ways to target exported functionalities:
1. Destructuring assignment
    example:
    { start } = require('./server');
2. Importing it as an object then targeting the key name (by default it is the name of the function we exported) 
    example:
    const server = require('./server'); 
    server.start();
*/

const server = require('./server');
server.start(); // Starting the server
