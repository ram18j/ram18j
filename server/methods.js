
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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

app.get('/', (err, res) => {
	res.status(200);
	res.json({ working: true });
	res.end();
});

app.post('/', (err, res) => {
	res.status(200);
	res.send('working');
	res.end();
});

app.put('/', (err, res) => {
	res.status(200);
	res.send('working');
	res.end();
});

app.post('/adduser', (err, res) => {

	console.log("Reached Endpoint: /adduser: ");

	res.status(200);
	res.send('Reached Endpoint: /adduser');
	res.end();

});	

module.exports = app;