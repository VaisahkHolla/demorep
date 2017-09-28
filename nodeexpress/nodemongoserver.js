const express = require('express');
const bodyParser = require('body-parser');
//to read/parse json data sent in body

const mongoose = require('mongoose');
const orders = require('./routes/orders');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/allstate");
//allstate is the name of db

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', orders);;

app.listen(9002, () => console.log('Express server started'));