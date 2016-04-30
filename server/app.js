// Dependencies
var express = require('express');
var	mongoose = require('mongoose');
var	bodyParser = require('body-parser');
//var config = require('./config');
var api = require('../api'); //Customized API code

// MongoDB
//mongoose.connect(config.mongodbConnection);



// Express
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Routes
app.use('/api', api);
//app.use('/swagger', express.static('swagger'));
app.use('/', express.static(__dirname + '/../public'));

// Start server
app.listen(3002);
console.log("go to http://localhost:3001");