const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();

const STATUS_USER_ERROR = 422;

const photos = [
	{
		title: 'Champ',
		description: 'My dog Champ'
	},
	{
		title: 'Raisa',
		description: 'My cat, Champ\'s enemy'
	}
];

server.use(bodyParser.json());

server.use(cors());

server.get('api/photos/get', (req, res) => {
	res.send(photos);
});

server.listen(3000, () => {
	console.log('Server running on port 3000');
});
