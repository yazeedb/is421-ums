module.exports = auth;

var dbHelper = require('../dbHelper');

function auth (app, express) {
	var authApi = express.Router();

	authApi.post('/', function (req, res) {
		console.log(req.body);
		var username = req.body.username;
		var query = 'SELECT * FROM is421_auth WHERE username = "' + username + '"';

		dbHelper(query)._callback = function (err, rows) {
			if (err)
				throw err;

			if (!rows.length) {
				res.status(403).send({
					success: false,
					message: 'Username not found'
				});
			} else {
				var user = rows[0];

				if (req.body.password !== user.password) {
					res.status(403).send({
						success: false,
						message: 'Incorrect password'
					});
				}

				res.json(user);
			}
		}
	});

	return authApi;
}