// test/models/user.js
// =============================================================================

var assert          = require('chai').assert
var expect          = require('chai').expect
var should          = require('chai').should
var request         = require("supertest");

var utils           = require('../utils');
var User            = require('../../app/models/user');

describe('User: model', function() {

  describe('#create()', function() {
    
    it('should create a new User', function (done) {
     
     // Create a User object to pass to User.create()
     var u = {
       email: 'test@example.com',
       password: 'password'
     };
     
     User.create(u, function (err, createdUser) {
       
       // Cerify that the returned user is what we expect
       expect(err).to.be.null;
       expect(createdUser.email).to.equal('test@example.com');
       
       // Call done to tell mocha that we are done with this test
       done();
     });
   });
  });

});