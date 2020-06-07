const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

//ROUTES
app.get('/', (req, res) => {
	console.log('Get request');
	res.send('We are on home');
});

//LISTEN TO SERVER
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
