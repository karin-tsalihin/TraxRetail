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
	if(typeof new_contact.name === 'string' && typeof new_contact.tel ===' string')
	{
		// check for more errors in the input e.g. a contact that is already exists in contacts array
		contacts.push(new_contact);
		// send respone with status: success
		res.status(200); 
	}
	// send respone with status: failure (can seperate to cases and send proper code status for each of them)
	res.status(400); 
	
});

// a route for finding a contact by name
server.get('/findByName/:name',(req,res) => {
	// get the name from url. check for errors in the parameter
	const name = req.params.name;
	// search for the name in the contacts array
	let contact = contacts.find(contact => contact.name === name);
	// return proper respone (if name found then contact, otherwise a failure message)
	if(contact == undefined)
	{
		res.send('contact was not found');
	}
	res.send(contact);
});

// start (activate) the server in the port
server.listen(port);