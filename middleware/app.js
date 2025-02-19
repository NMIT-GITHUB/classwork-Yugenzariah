const express = require('express');
const morgan = require('morgan');

const app = express();

app.use((req, res, next) => {
    if(req.url === '/') {
        next()
    } else if(req.url === '/throw') {
        throw new Error("Wrong path!")
    } else {
        next("You did not visit the root!")
    }
})

app.use((req, res, next) => {
    res.send("Welcome to the home page.")
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500)
    next(err)
});

app.use((err, req, res, next) => {
    res.send("Error Message: " + err.message)
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});