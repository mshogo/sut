var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AddEnd' });
  //res.redirect(302, '/');
});

module.exports = router;
