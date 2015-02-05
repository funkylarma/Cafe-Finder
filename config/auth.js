// config/auth.js
// =============================================================================

var passport        = require('passport');
var session         = require('express-session');
var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../app/models/user');

module.exports = function(app) {
  
  // Add the session secret
  app.use(session({ 
    secret: 'notreallyallthatsecret',
    resave: false,
    saveUninitialized: false
  }));
}