var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var apache_log = require('/usr/lib/node_modules/apache-log/lib/apache-log.js');
var fs = require('fs');

//var index = require('./routes/index');
//var login = require('./routes/login');
//var authenticate = require('./routes/authenticate');
//var home = require('./routes/home');
//var loginerr = require('./routes/loginerr');

var index = require('./routes/index');
var login = require('./routes/login');
var authenticate = require('./routes/authenticate');
var home = require('./routes/home');
var loginerr = require('./routes/loginerr');
var logout = require('./routes/logout');
var addreq = require('./routes/addreq');
var add = require('./routes/add');
var adderr = require('./routes/adderr');
var addend = require('./routes/addend');
var refreq = require('./routes/refreq');
var ref = require('./routes/ref');
var referr1 = require('./routes/referr1');
var referr2 = require('./routes/referr2');
var refend = require('./routes/refend');
var delreq = require('./routes/delreq');
var del = require('./routes/del');
var delerr1 = require('./routes/delerr1');
var delerr2 = require('./routes/delerr2');
var delerr3 = require('./routes/delerr3');
var delend = require('./routes/delend');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(logger('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(logger('common', {stream: accessLogStream}));

//app.use('/', index);
//app.use('/login', login);
//app.use('/authenticate', authenticate);
//app.use('/home', home);
//app.use('/loginerr', loginerr);

app.use('/', index);
app.use('/login', login);
app.use('/authenticate', authenticate);
app.use('/loginerr', loginerr);
app.use('/home', home);
app.use('/logout', logout);
app.use('/addreq', addreq);
app.use('/add', add);
app.use('/adderr', adderr);
app.use('/addend', addend);
app.use('/refreq', refreq);
app.use('/ref', ref);
app.use('/referr1', referr1);
app.use('/referr2', referr2);
app.use('/refend', refend);
app.use('/delreq', delreq);
app.use('/del', del);
app.use('/delerr1', delerr1);
app.use('/delerr2', delerr2);
app.use('/delerr3', delerr3);
app.use('/delend', delend);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
