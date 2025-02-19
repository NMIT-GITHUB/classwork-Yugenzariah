const express = require('express'); // Import the express module
const log = require('morgan'); // Import the morgan module
const http = require('http'); // Import the http module

const app = express(); // Create an Express app

app.use((req, res, next) => { // Request, Response, Next functions
    const minute = new Date().getMinutes(); // Create a constant variable that holds the current time minutes
    if(minute % 2 === 0) { // If the current time minutes are divisible by 2
        next(); // Call the next function
    }else{ 
        res.statusCode = 403; // Set the status code to 403
        res.end('Not authorized'); // End the response with a message
    }
});

app.use((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}); // Set the response header
    res.end('Hello World'); // End the response with a message
});

http.createServer(app).listen(3000); // Create a server and listen on port 3000