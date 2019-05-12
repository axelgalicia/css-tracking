const express = require('express');
const app = express();
const port = 3000;

app.get('/user-input', (req, res) => {
    console.log('%j', req.query);
    res.send('hello');
});

app.listen(port, () => console.log(`KeyLogger from CSS listenning on port ${port}`));