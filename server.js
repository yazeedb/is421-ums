var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080);