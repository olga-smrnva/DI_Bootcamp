//PART III 
let currentDate = require('./main.js');

const http = require("http");
http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.end("The date and time are currently: " + currentDate.myDate());
}).listen(3000);
