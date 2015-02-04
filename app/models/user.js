// models/user.js
// =============================================================================

var mongoose     = require('mongoose');
var bcrypt       = require('bcrypt');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    first: String,
    last: { 
      type: String, 
      trim: true
    }
  },
  password: {
    type: String,
    
  },
  updated_at: {
		type: Date
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

var User = mongoose.model('Users', UserSchema);

module.exports = User;