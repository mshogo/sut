var request = require('supertest');
var app = require('../../app');
var req = request(app);

describe('POST /add', function() {
  describe('/', function() {
    it('shoud response text with responceCode200.', function(done) {
      var url = '/add';
      req.post(url).end(function(err, ret) {
        var res = ret.res;
        var statusCode = res.statusCode;
        var text = res.text;

        statusCode.should.equal(200);
        done();
      });
    });
  });
});
