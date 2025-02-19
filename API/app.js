const express = require('express');

const app = express();

app.get('random/:min/:max', (req, res) => {
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);

    if(isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({error: 'Bad request'});
        return;
    }

    const result = Math.round(Math.random() * (max - min) + min);

    res.json({result: result});
}); // Create a route that accepts a range of numbers and returns a random number within that range

app.listen(3000, () => {
    console.log('App started on port 3000');
}); // Create a server and listen on port 3000