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
  if (rate < 0.4) {

  } else {
    if (rate < 0.1) {}
    if (rate > 0.1) {}
    if (rate > 0.2) {
      if (rate > 0.3) {
        if (rate > 0.4) {

        }
        if (rate < 0.4) {
        }
      }
    }
  }
});

module.exports = router;
