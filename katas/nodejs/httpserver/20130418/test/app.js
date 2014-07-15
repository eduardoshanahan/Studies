var http = require('http');
var should = require('should');
var server = require('../server');

var httpOptions = {
    hostname: 'localhost',
    port: '3001'
};

describe('httpServerStatusKata', function(){

    before(function(){
        server.listen(httpOptions.port);
    });

    after(function(){
        server.close();
    });

    describe('/', function (){

        it('should return 200"', function (done){
            http.get(httpOptions, function (res){
                res.statusCode.should.equal(200);
                done();
            });
        });

        it('should return "Server Status OK"', function (done){
            http.get(httpOptions, function (res){
                var data = '';

                res.on('data', function(chunk){
                    data += chunk;
                });

                res.on('end', function(){
                    data.should.equal('Server status: OK\n');
                    done();
                });
            });
        });
    });
});

