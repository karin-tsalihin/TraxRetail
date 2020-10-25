// require express and create an instance of it
const express = require('express');
const server = express();

// defining port number
const port = 4000;

// Array of contact items
let contacts = [
{name: 'Karin', tel: '0546599034'},
{name: 'Avi', tel: '0506599033'},
{name: 'Moshe', tel: '0516569034'},
{name: 'Rina', tel: '0536599034'},
{name: 'Ori', tel: '0556565034'},
{name: 'Naama', tel: '0546598034'},
{name: 'Roni', tel: '0596599033'},
{name: 'Adi', tel: '0517569034'},
{name: 'Yoni', tel: '0586599034'},
{name: 'Dana', tel: '0556625034'},
];

// respond with a message on http://localhost:4000/whos-there
server.get('/whos-there',(req,res) => {
	res.send('Hi Trax! This is Karin Tsalihin');
});

// create a new route for getting all the contacts
server.get('/AllContacts',(req,res) => {
	res.send(contacts);
});


// start (activate) the server in the port
server.listen(port);