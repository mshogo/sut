var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'ログイン画面', message: 'エラー' });
  //res.render('loginerr');
  var i = 0;
  do {
    i += 1;
  } while (i < 5);

  var n = 0;
  var x = 0;
  while (n < 3) {
    n++;
    x += n;
  }

  var a = [ 0, 3, 3,24, 5, 3, 1 ];
  for (var i = 0; i < a.length; i++) {
    if (a[i] == 5) {
      break;
    }
  }

  var b = [ 0, 3, 3,24, 5, 3, 1 ];
  for (var i = 0; i < b.length; i++) {
    if (b[i] == 5) {
      break;
    }
  }
});

module.exports = router;
