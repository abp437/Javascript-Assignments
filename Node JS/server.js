var http = require('http');
var router = require('./router');

http.createServer(router.handleRequest).listen(8000);
