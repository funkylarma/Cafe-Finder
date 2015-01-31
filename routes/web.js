// routes/web.js
// =============================================================================

// Load all the packages we need
var express         = require('express');
var router          = express.Router();
var path            = require('path');

// middleware to use for all requests
router.use(function(req, res, next) {
  
  // Log something to the console
  console.log('Accessing the front end.');
  
  // Make sure we go to the next routes and don't stop here
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // Just output the Angular ready index template
  res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
});

module.exports = router;