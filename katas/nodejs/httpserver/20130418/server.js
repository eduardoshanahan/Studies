var http = require('http');

var getStatus = function (req, res){
    res.writeHeader(200, {'Content-type':'text/plain'});
    res.end('Server status: OK\n');
};

var server = http.createServer(getStatus);

var listen = function () {
    server.listen.apply(server, arguments);
    console.log('Server started at port ', arguments[0]);
};

var close = function (callback) {
    server.close(callback);
    console.log('Server closed');
};

exports.listen = listen;
exports.close = close;