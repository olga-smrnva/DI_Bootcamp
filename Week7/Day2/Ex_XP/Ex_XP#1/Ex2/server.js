const http = require("http");
http.createServer(function(req, res) {
	console.log("I am listening...");

	const user = {
		firstname: 'John',
		lastname: 'Doe'
	};

	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(user));
}).listen(8080);