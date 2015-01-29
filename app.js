// app.js

// BASE SETUP
// =============================================================================

// Load all the packages we need
var express      = require('express');
var path         = require('path');
var bodyParser   = require('body-parser');
var logger       = require('morgan');
var compression  = require('compression');
var cacheTime    = 86400000*7; //a week
var app          = express();

// Configure the app
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public',{ maxAge: cacheTime }));

// Load the route modules
// =============================================================================
var main_routes       = require('./routes/index');
var api_routes = require('./routes/api');

// Register the routes
app.use('/', main_routes);
app.use('/api', api_routes);

module.exports = app;