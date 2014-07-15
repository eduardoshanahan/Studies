var net = require('net');

var chatServer = net.createServer();

chatServer.on('connection', function(client){
	client.write('Hi\n');

	client.end();
});

chatServer.listen(9000);