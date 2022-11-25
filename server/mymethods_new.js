const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const URI = 'mongodb://localhost:27017';

const helmet = require('helmet');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.post('/adduserToDb', async function requestHandler(req, res){	

	let UsrEmailId = req.param('UsrEmailId', 'null');
	let UsrPhoneNumber = req.param('UsrPhoneNumber', 'null');
	let UsrPassword = req.param('UsrPassword', 'null')
	let UsrKYCStatus = 0;	

	let dbo = new MongoClient(URI);

	try {
		
		var count = await dbo.db('mydb').collection('customers').count({ 
			$or: [ 	{ 'EmailId' : UsrEmailId },
						{ 'PhoneNumber': UsrPhoneNumber} ]
		}); 
		
	} catch(e) 	{ console.log("DBERR - findOne Failed - " + e) 
	} finally	{ dbo.close(); }	

	console.log("Cursor :" + count)

	if (count !== 0) { 
		console.log ("Email / Phone already Registered.")
	}
	else {

		let dbo = new MongoClient(URI);

		try {	

			await dbo.db('mydb').collection('customers').insertOne(
			{	'EmailId' : UsrEmailId,
			 	'PhoneNumber': UsrPhoneNumber,
			 	'Password': UsrPassword,
				'KYCStatus': UsrKYCStatus});
			
		} catch(e) 	{ console.log("DBERR - Insert Failed - " + e) 
		} finally	{ dbo.close(); }	

	} 
		
});

module.exports = app;