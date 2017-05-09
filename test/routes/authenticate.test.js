var request = require('supertest');
var app = require('../../app');
var req = request(app);

describe('POST /authenticate', function() {
  describe('/', function() {
    it('shoud response text with responceCode200.', function(done) {
      var url = '/authenticate';
      req.post(url)
         .send({ email: "example@example.com", password: "password" })
         .end(function(err, ret) {
        var res = ret.res;
        var statusCode = res.statusCode;
        var text = res.text;

        statusCode.should.equal(302);
        done();
      });
    });
  });
});
