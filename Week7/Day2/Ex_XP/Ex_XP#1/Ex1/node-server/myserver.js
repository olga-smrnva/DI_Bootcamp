const http = require("http");
http.createServer(function(req, res) {
	console.log("I am listening...");

	res.setHeader('Content-Type', 'text/html');
	res.write("<h1>This is my first response</h1>");
	res.write("<h1>This is my second response</h1>");
	res.end("This is my third response");
}).listen(3000);

