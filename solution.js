// require express and create an instance of it
const express = require('express');
const server = express();

// defining port number
const port = 4000;

// respond with a message on http://localhost:4000/whos-there
server.get('/whos-there',(req,res) => {
	res.send('Hi Trax! This is Karin Tsalihin');
});

// start (activate) the server in the port
server.listen(port);
