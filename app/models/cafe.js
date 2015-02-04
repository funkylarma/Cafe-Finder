// models/cafe.js
// =============================================================================

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CafeSchema   = new Schema({
  name: {
    type: String,
    required: 'Cafe requires a name',
    trim: true
  },
  location: {
    type: [Number],
    required: true,
    index: '2d'
  },
  updated_at: {
		type: Date
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	created_by: { 
  	type : Schema.ObjectId,
  	ref : 'Users'
  }
});

module.exports = mongoose.model('Cafes', CafeSchema);