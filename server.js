var express = require('express'),
	app = express();

var apiRoutes = require('./app/api.routes.js');

app.use(express.static(__dirname + '/public'));
app.use('/api/users', apiRoutes.usersApi(app, express));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080);