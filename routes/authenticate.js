var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  //res.render('authenticate', { title: 'Express' });
  var email = req.body.email;
  var password = req.body.password;
  if (email == "example@example.com" && password == "password") {
    res.redirect(302, "/home");
  } else {
    res.redirect(302, "/loginerr");
  }
  // 
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      var num = i * 10 + j;
      if (num % 3 == 0) {
        num += 1 << 2;
      }
      else if (num >= 50) {
        num *= 2;
        if (num % 40 > 10) {

        }
      }
      else if (num % 100 >= 50) {
        num /= 2;
        if (num % 10 == 0) {

        } else {

        }
      }
    }
  }
});

module.exports = router;
