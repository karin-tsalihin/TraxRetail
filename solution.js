// require express and create an instance of it
const express = require('express');
const server = express();

//require body parser module for PSOT request and create parser
const bodyParser = require('body-parser');
// extended option is false- user's input is expected to be a contact object 
// client side is required (for example: html form)
let urlencodedParser = bodyParser.urlencoded({extended:false});

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

// a route for getting all the contacts
server.get('/AllContacts',(req,res) => {
	res.send(contacts);
});

// a route for adding a new contact (from client side) to contacts array
server.post('/AddContact', urlencodedParser, function(req, res){
	new_contact = req.body; 
	// check for errors in the input (invalid or contact that is already exists in contacts)
	contacts.push(new_contact);
	// send respone to the user- status: success
	res.status(200);
});


// start (activate) the server in the port
server.listen(port);