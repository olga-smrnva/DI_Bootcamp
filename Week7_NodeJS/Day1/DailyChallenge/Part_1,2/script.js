//PART I
const main = require("./main.js");

const a = main.largeNumber;
const b = 5;
const result = a+b;

console.log(result);


//PART II
const http = require("http");
http.createServer(function(req, res) {
	console.log("I am listening...");

	res.setHeader('Content-Type', 'text/html');
	res.end(result + "<h1>Hi there at the frontend</h1>");
}).listen(3000);
