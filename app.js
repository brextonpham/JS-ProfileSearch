var router = require("./router.js");

//Problem: We need a simple way to retrieve user info
//Solution: Use Node.js to perform the profile look ups and server our tempate via HTTP

//1. Create a web server

var http = require('http');
http.createServer(function(request, response) {
	router.home(request, response);
	router.user(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');


