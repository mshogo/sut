var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {


  var result = 10;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; k++) {
        if (result == 0) {
          result += 10;
        }
        result += 5;
        if (result > 100) {
          result -= 10;
        }
      }
    }
  }

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; k++) {
        if (result == 0) {
          result += 10;
        }
        result += 5;
        if (result > 100) {
          result -= 10;
        }
      }
    }
  }

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; k++) {
        if (result == 0) {
          result += 10;
        }
        result += 5;
        if (result > 100) {
          result -= 10;
        }
      }
    }
  }

  res.render('index', { title: 'DelReq3' });
});

module.exports = router;
