// routes/api.js
// =============================================================================

module.exports = function(app) {

  // Load all the packages we need
  var express      = require('express');
  var router       = express.Router();
  
  // Configure the model entities
  var User         = require('../models/user');
  var Cafe         = require('../models/cafe');
  
  // Test route to make sure everything is working
  router.get('/', function(req, res) {
    
    // Return a string
    res.json({ message: 'Welcome to the cafe finder API' });   
  });
  
  // Get a user by id /user/:user_id
  router.get('/user/:user_id', function(req, res, next) {
    // Just output the Angular ready index template
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
  });
  
  // Get all the users /users
  router.get('/users', function(req, res) {
    // Find all the users
    User.find(function(err, users) {
      // If there is an error
      if (err) {
        return res.status(400).send({
				  message: err.message
			  });
      }
      // Return the users
      res.json(users);
    });
  });
  
  // Post a new user
  router.post('/users', function(req, res, next) {
    // Create a new instance of a User
    var user = new User();
    // Set the user name from the request
    user.email = req.body.email;
    user.name.first = req.body.firstName;
    user.name.last = req.body.lastName;
    // Save the user and check for errors
    user.save(function(err) {
      // If there was an error
      if (err) {
        return res.status(400).send({
				  message: err.message
			  });
      }
      // Return a success string
      res.json({ message: 'User created', date: user });
    });
  });
  
  // Get a cafe by id /cafe/:cafe_id
  router.get('/cafe/:cafe_id', function(req, res) {
    // Find the cafe by the id
    Cafe.findById(req.params.cafe_id, function(err, cafe) {
      // If there was an error
      if (err) {
        return res.status(400).send({
				  message: err.message
			  });
      }
      // Return the cafe
      res.json(cafe);
    });
  });
  
  // Update a cafe by id /cafe/:cafe_id
  router.put('/cafe/:cafe_id', function(req, res) {
    // TODO: update the cafe
  });
  
  // Delete a cafe by id /cafe/:cafe_id
  router.delete('/cafe/:cafe_id', function(req, res) {
    // Delete the cafe by id
    Cafe.remove({
      _id: req.params.cafe_id
    }, function(err, cafe) {
      // If there was an error
      if (err) {
        return res.status(400).send({
				  message: err.message
			  });
      }
      // Return a success message
      res.json({ message: 'Cafe deleted' });
    });
  });
    
  // Get all the cafes /cafes
  router.get('/cafes', function(req, res) {
    // Find all the cafes
    Cafe.find(function(err, cafes) {
      // If there is an error
      if (err) {
        return res.status(400).send({
				  message: err.message
			  });
      }
      // Return the cafes
      res.json(cafes);
    });
  });
  
  // Post a new cafe
  router.post('/cafes', function(req, res, next) {
    // Create a new instance of a Cafe
    var cafe = new Cafe();
    // Set the cafe name from the request
    cafe.name = req.body.name;
    cafe.location = [req.body.longitude, req.body.latitude];
    cafe.created_by = req.body.userId;
    // Save the cafe and check for errors
    cafe.save(function(err) {
      // If there was an error
      if (err) {
        return res.status(400).send({
				  message: err.message
			  });
      }
      // Return a success string
      res.json({ message: 'Cafe created', cafe_id: cafe._id });
    });
  });
  
  // Use the router object
  app.use('/api', router);
}