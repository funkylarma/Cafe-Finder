// routes/api.js
// =============================================================================

// Load all the packages we need
var express      = require('express');
var router       = express.Router();

// Configure the model entities
var Cafe         = require('../models/cafe');

// middleware to use for all requests
router.use(function(req, res, next) {
  
  // Log something to the console
  console.log('Something is happening.');
  
  // Make sure we go to the next routes and don't stop here
  next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

// on routes that end in /cafe/:cafe_id
router.route('/cafe/:cafe_id')

  // Get the required cafe
  .get(function(req, res) {
    Cafe.findById(req.params.cafe_id, function(err, cafe) {
      if (err) {
        res.send(err);
      }
      
      res.json(cafe);
    });
  });
  
// on routes that end in /cafes
router.route('/cafes')

  // Get all the cafes
  .get(function(req, res) {
    
    Cafe.find(function(err, cafes) {
      if (err) {
        res.send(err);
      }
      
      res.json(cafes);
    });
    
  })

  // create a cafe
  .post(function(req, res) {
    
    // Create a new instance of a Cafe
    var cafe = new Cafe();
    
    // Set the cafe name from the request
    cafe.name = req.body.name;
    
    // Save the cafe and check for errors
    cafe.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({
        message: 'Cafe created!'
      });
    });
    
  });

// Export the router
module.exports = router;