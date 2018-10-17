var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  data = {
  	name: 'talal',
  	age: '25',
  	friends: [name => 'ali', age => 5],
  }
  res.render('users', data);
});

module.exports = router;
