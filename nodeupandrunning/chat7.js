var net = require('net');

var chatServer = net.createServer();
var clientList = [];

function cleanupClients(cleanup) {
    var j,
        indexOfClient;

    for (j = 0; j < cleanup.length; j++) {
        indexOfClient = clientList.indexOf(cleanup[j]);
        clientList.splice(indexOfClient, 1);
    }
}

function broadcast(message, client) {
    var i,
        cleanup = [];

    for (i = 0; i < clientList.length; i++) {
        if (client !== clientList[i]) {
            if (clientList[i].writable) {
                clientList[i].write(client.name + ' said ' + message);
            }
            else{
                cleanup.push(clientList[i]);
                clientList[i].destroy();
            }
        }
    }

    cleanupClients(cleanup);
}

chatServer.on('connection', function (client) {
    client.name = client.remoteAddress + ':' + client.remotePort;
	clientList.push(client);
	console.log(client.name + ' connected');
	client.write('Welcome back ' + client.name + '\n');

	client.on('data', function (data) {
		broadcast(data, client);
	});

	client.on('end', function () {
		var indexOfClient = clientList.indexOf(client);
        clientList.splice(indexOfClient, 1);
        console.log(client.name + ' quited');
	});
});

var portNumber = 9000;
chatServer.listen(portNumber);