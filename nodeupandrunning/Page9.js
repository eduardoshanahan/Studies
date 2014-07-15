/**
 * Created with nodeupandrunning.
 * User: eduardoshanahan
 * Date: 28/02/2013
 * Time: 15:19
 */

var http=require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Page 9");
}).listen(8124, "127.0.0.1");

console.log('Page 9 running at 8124');