var http = require('http');

var getStatus = function(req, res){
    res.writeHeader(200, {'Content-type':'text/plain'});
    var message = 'Server Status OK';
    res.end(message);
};

var server = http.createServer(getStatus);

var listen = function () {
    server.listen.apply(server, arguments);
    console.log('Server listening at ', arguments[0]);
};

var close = function (callback){
    server.close(callback);
    console.log('Server closed');
};

exports.listen = listen;
exports.close = close;