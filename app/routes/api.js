// routes/api.js
// =============================================================================

// Load all the packages we need
var express      = require('express');
var router       = express.Router();

// Configure the model entities
var Cafe         = require('../models/cafe');

// Middleware to use for all requests
router.use(function(req, res, next) {
  
  // Log something to the console
  console.log('Accessing the api.');
  
  // Make sure we go to the next routes and don't stop here
  next();
});

// Test route to make sure everything is working
router.get('/', function(req, res) {
  
  // Return a string
  res.json({ message: 'Welcome to the cafe finder API' });   
});

// On routes that end in /cafe/:cafe_id
router.route('/cafe/:cafe_id')

  // Get the cafe with this id /cafe/:cafe_id
  .get(function(req, res) {
    
    // Find the cafe by the id
    Cafe.findById(req.params.cafe_id, function(err, cafe) {
      
      // If there was an error
      if (err) {
        res.send(err);
      }
      
      // Return the cafe
      res.json(cafe);
    });
    
  })
  
  // Update the cafe with this id /cafe/:cafe_id
  .put(function(req, res) {
    
  })
  
  // Delete the cafe with this id /cafe/:cafe_id
  .delete(function(req, res) {
    
    // Delete the cafe by id
    Cafe.remove({
      _id: req.params.cafe_id
    }, function(err, cafe) {
      
      // If there was an error
      if (err) {
        res.send(err);
      }
      
      // Return a success message
      res.json({ message: 'Cafe deleted' });
    });
  });
  
// On routes that end in /cafes
router.route('/cafes')

  // Get all the cafes
  .get(function(req, res) {
    
    // Find all the cafes
    Cafe.find(function(err, cafes) {
      
      // If there is an error
      if (err) {
        res.send(err);
      }
      
      // Return the cafes
      res.json(cafes);
    });
    
  })

  // Post a new cafe
  .post(function(req, res, next) {
    
    // Create a new instance of a Cafe
    var cafe = new Cafe();
    
    // Set the cafe name from the request
    cafe.name = req.body.name;
    cafe.location = [req.body.longitude, req.body.latitude];
    
    // Save the cafe and check for errors
    cafe.save(function(err) {
      
      // If there was an error
      if (err) {
        return res.status(400).send({
				  message: err.message
			  });
      }
      
      // Return a success string
      res.json({ message: 'Cafe created!' });
    });
    
  });

// Export the router
module.exports = router;