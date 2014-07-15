var http = require('http');

var server = http.createServer(
        function (req, res){
            res.writeHead(200, {'Content-type':'text/plain'});
            res.end('echo finished\n');
        }
    ).listen(3030, '127.0.0.1');

console.log('Server listening');