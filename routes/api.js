var express = require('express');
var router = express.Router();

/* GET the main api */
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

module.exports = router;