// test/models/user.js
// =============================================================================

var assert          = require('chai').assert
var expect          = require('chai').expect
var should          = require('chai').should
var request         = require("supertest");

var utils           = require('../utils');
var Cafe            = require('../../app/models/cafe');

describe('Cafe: model', function() {

  describe('#create()', function() {
    
    it('should create a new Cafe', function (done) {
     
     // Create a User object to pass to User.create()
     var cafe = {
       
     };
     
     Cafe.create(cafe, function (err, createdCafe) {
       
       // Cerify that the returned user is what we expect
       expect(err).to.be.null;
       
       // Call done to tell mocha that we are done with this test
       done();
     });

   });
  });

});