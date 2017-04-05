// need to start the server to test
var request = require('request');
var root = "https://ls-javascript-floalex.c9users.io/";

describe('Routes', function() {
  describe("/", function() {
    it("returns status code 200", function(done) {
      request.get(root, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });   
  });
});
