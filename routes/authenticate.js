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
    res.redirect(302, "/login");
  }
});

module.exports = router;
