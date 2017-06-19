// DEPENDENCIES
var friends = require('./app/data/friends.js');
var apiRouting = require('./app/routing/apiRoutes.js');
var htmlRouting = require('./app/routing/htmlRoutes.js');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// SETUP EXPRESS APP
var app = express();
var PORT = 3000;

// SETUP EXPRESS APP TO HANDLE DATA PARSING OF THE TYPES BELOW:
// TYPE JSON, URLENCODED AND TEXT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// ROUTING FUNCTION CALLS

app.listen(PORT, function() {
    console.log('App is listening to port ' + PORT);
});