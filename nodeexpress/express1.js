const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(cors());
//Compare this and nodeserver
//cors added as middleware to server
//http://IP:PORT/
app.get('/', function(req, res) {
    res.send("Default Page")
});

//http://IP:PORT/home
app.get('/home', function(req, res) {
    res.send('Home Page')
});

//http://IP:PORT/about
app.get('/about', function(req, res) {
    res.send('About Page')
});
app.get('/getNames', function(req, res) {
    res.setHeader("Content-type", "application/JSON");
    res.send(fs.readFileSync('data.json'));
    //sent as file if mime type is not set and its sending file as it is

});

app.listen(9001, () => console.log('Server started'));