var http = require('http');
var fs = require('fs');


http.createServer(function(req,res){
	fs.readFile("index.html", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data);
  response.end();
});
}).listen(process.env.PORT)