var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DelErr3' });


  var result = 10;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; k++) {
        if (result == 0) {
          result += 10;
        }
        resul += 5;
        if (result > 100) {
          result -= 10;
        }
      }
    }
  }

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; k++) {
      }
    }
  }

});

module.exports = router;
