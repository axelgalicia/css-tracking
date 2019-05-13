/*

@Author: Axel Galicia
@Date: May 12th, 2019

This is just a demo of how using CSS varibles 
pages may be able to track user interaction without
using an HTTP Request created explicitly by JS.
*/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/user-input', (req, res) => {
    console.log('%j', req.query);
    res.send('hello');
});

app.listen(port, () => console.log(`KeyLogger from CSS listenning on port ${port}`));