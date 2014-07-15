var server = require('../../lib/server');
var should = require('should');
var http = require('http');


var httpOptions = {
    'port': 3001,
    'hostname': 'localhost'
};

describe('HTTP Server Status Kata', function (){
    before(function(){
        server.listen(httpOptions.port);
    });

    after(function(){
        server.close();
    });

    describe('/', function (){

        it('should get a status 200',function (done){
            http.get(httpOptions, function (res){
                res.statusCode.should.equal(200);
                done();
            });
        });

        it('should return a "Server Status OK" message', function (done){
            http.get(httpOptions, function (res){
                var data = '';

                res.on('data', function(chunk){
                    data += chunk;
                });

                res.on('end', function(){
                    data.should.equal('Server Status OK');
                    done();
                });
            });
        });
    });
});