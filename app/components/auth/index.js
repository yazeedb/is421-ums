module.exports = auth;

var dbHelper = require('../dbHelper');
var jwt = require('jsonwebtoken');

function auth (app, express) {
	var authApi = express.Router();

	authApi.post('/', function (req, res) {
		var username = req.body.username;
		var query = 'SELECT * FROM is421_auth WHERE username = "' + username + '"';

		dbHelper(query)._callback = function (err, rows) {
			if (err)
				return res.send(err);

			if (!rows.length) {
				return res.status(403).send({
					success: false,
					message: 'Username not found'
				});
			}
			
			var user = rows[0];

			if (req.body.password !== user.password) {
				return res.status(403).send({
					success: false,
					message: 'Incorrect password'
				});
			}

			var payload = {	username: user.username };
			var secret = require('../../../config.js').secret;
			var options = { expiresin: 86400 };

			var token = jwt.sign(payload, secret, options);
			
			return res.json({
				success: true,
				token: token
			});
		}
	});

	return authApi;
}