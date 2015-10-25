var express = require('express'),
	app = express();

var bodyParser = require('body-parser');

var apiRoutes = require('./app/api.routes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use('/api/auth', apiRoutes.authApi(app, express));
app.use('/api/users', apiRoutes.usersApi(app, express));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080);