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

    it('should use chai http request to create an event', function() {
      chai.request('http://localhost:3000')
      .post('/events')
      .send({
        '_method': 'put',
        'id': 'idtest2u8374y3',
        'title': 'test event title',
        'description': 'test event description',
        'date': '12-09-2020'
      });
    });
});
