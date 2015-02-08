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
    
    var cafe = null;
    
    beforeEach(function(done) {
      // Create a User object to pass to User.create()
      cafe = new Cafe();
      cafe.name = "Huffers";
      
      done();
    });
    
    it('new cafe instance should have a name', function(done) {
      expect(cafe.name).to.be.equal('Huffers');
      done();
    });
    
    it('new instance should have a geolocation');
    
    it('new instance should be created by a user');
    
    it('new instance should get saved to the databse');

  });
   
   
});