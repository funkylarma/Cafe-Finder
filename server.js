// serveer.js
// =============================================================================

// Load base packages
var express         = require('express');
var app             = express();

// Configure the app
require('./config/app')(express, app);

// Auth stuff
require('./config/auth')(app);

// Register the routes
require('./app/routes/api.js')(app);
require('./app/routes/web.js')(app);

// Export the app
module.exports = app;