var express = require('express'),
	app = express();

var config = require('./config.js');

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port);