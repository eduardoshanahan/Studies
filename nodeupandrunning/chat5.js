var net = require('net');

var chatServer = net.createServer();
var clientList = [];

chatServer.on('connection', function(client){
	clientList.push(client);

	client.on('data', function(data){
		for (var i = 0; i < clientList.length; i++) {
			console.log(client);
			clientList[i].write(data);
		};
	});
});

chatServer.listen(9000);