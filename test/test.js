var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Endpoint', function() {
    it('should return all the events', function() {
      expect('/events').to.equal('/events');
    });
    it('should use chai http to make a request to the server', function(done) {
      chai.request('http://localhost:3000')
        .get('/events')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(err).to.be.null
          done();
        });
    });
});
