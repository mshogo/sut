var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'ログイン画面' });
  // 
  var rand1 = Math.floor(Math.random() * 100);
  var rand2 = Math.floor(Math.random() * 100);
  var maxRand = Math.max(rand1, rand2);
  var minRand = Math.min(rand1, rand2);
  var rate = minRand / maxRand;
  if (rate < 0.5) {

  } else {

  }
});

module.exports = router;
