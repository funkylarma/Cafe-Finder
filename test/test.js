var assert = require('chai').assert
var expect = require('chai').expect

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));    
    })
  })
})

describe('Maths', function() {
  describe('addition', function() {
    it('4+5 should equal 9', function() {
      expect(4+5).to.equal(9);
    })
  })
})