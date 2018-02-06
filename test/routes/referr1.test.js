var request = require('supertest');
var app = require('../../app');
var req = request(app);

describe('GET /referr1', function() {
  describe('/', function() {
    it('shoud response text with responceCode200.', function(done) {
      var url = '/referr1';
      req.get(url).end(function(err, ret) {
        var res = ret.res;
        var statusCode = res.statusCode;
        var text = res.text;

        statusCode.should.equal(200);
        done();
      });
    });
  });
});
