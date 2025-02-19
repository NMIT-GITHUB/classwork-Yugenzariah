const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const publicPath = path.resolve(__dirname, 'assets');
app.use(express.static(publicPath));

app.use((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Looks like you didn\'t find a static file.');
});

http.createServer(app).listen(3000);