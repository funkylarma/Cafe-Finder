// models/cafe.js
// =============================================================================

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CafeSchema   = new Schema({
  name: String
});

module.exports = mongoose.model('Cafe', CafeSchema, 'cafes');