var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'ホーム画面' });
  //
  var sum = 1 << 16;
  sum *= 3;
  sum >>= 2;

});

module.exports = router;
