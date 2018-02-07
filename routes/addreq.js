var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/a', function(req, res, next) {


  var sum = 0;
  for (var i = 0; i < 100; i++) {
    if (sum < 0) {
      for (var j = 0; j < 100; j++) {
        sum += 1;
        if (sum < -50) {
          sum += 1;
        }
      }
    }
    else if (sum > 0) {
      for (var j = 0; j < 100; j++) {
        sum -= 1;
        if (sum > 50) {
          sum -= 1;
        }
      }
    }
    else {
      sum += 50;
    }
  }
  if (sum < -10) {
    if (sum < -11) {
      if (sum < -12) {
        if (sum < -13) {
        }
      }
    }
  }

  res.render('index', { title: 'AddReq' });
});

module.exports = router;
