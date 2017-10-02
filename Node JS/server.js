var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
	console.log(request.headers);
	response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('./index.html', null, function(error, data) {
		if(error) {
			response.writeHead(404, 'Error Encountered', {'Content-Type': 'text/html'});
		} else {
			response.write(data);
		}
		response.end();
	});
}

http.createServer(onRequest).listen(8000);
