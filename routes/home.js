var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'ホーム画面' });
  //
  var sum = 1 << 16;
  sum *= 3;
  sum >>= 2;
  if (sum > 0) {
    if (sum > 1) {
      if (sum > 2) {

      }
      else if (sum > 3) {

      } else {

      }
    } else {

    }
  }

});

module.exports = router;
