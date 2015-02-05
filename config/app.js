// config/app.js
// =============================================================================

var path            = require('path');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var logger          = require('morgan');
var compression     = require('compression');
var cacheTime       = 86400000*7; //a week

var mongoose        = require('mongoose');
var db              = require('./db');

module.exports = function(express, app) {
  
  app.use(compression());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override')); 
  app.use(express.static(__dirname + '/public',{ maxAge: cacheTime }));
  
  app.set('dbUrl', db[app.settings.env]);
  
  mongoose.connect(app.get('dbUrl'));
  
}