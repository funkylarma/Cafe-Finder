// app.js
// =============================================================================

// Load all the packages we need
var express         = require('express');
var path            = require('path');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var logger          = require('morgan');
var compression     = require('compression');
var cacheTime       = 86400000*7; //a week
var app             = express();

// Configure the database
var db              = require('./config/db');
var mongoose        = require('mongoose');
mongoose.connect(db.url + '/' + db.dbName);

// Configure the app
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public',{ maxAge: cacheTime }));

// Load the route modules
var api_routes      = require('./app/routes/api');
var main_routes     = require('./app/routes/web');

// Register the routes
app.use('/', main_routes);
app.use('/api', api_routes);

// Export the app
module.exports = app;