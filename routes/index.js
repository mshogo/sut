var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // 
  var sum = 0;
  for (var i = 0; i < 10; i++) {
    if (i % 2) {
      sum += 1;
    } else {
      sum % 2;
    }
  }
});

module.exports = router;
