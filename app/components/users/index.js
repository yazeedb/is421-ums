module.exports = users;

var dbHelper = require('../dbHelper');

function users (app, express) {
	var usersApi = express.Router();

	usersApi.get('/', function (req, res) {
		var getUsers = dbHelper('SELECT * FROM is421_users');

		getUsers._callback = function (err, rows) {
			if (err)
				throw err;

			res.json(rows);
		};
	});

	usersApi.post('/', function (req, res) {

	});

	//crud on single user
	usersApi.route('/:username')

		// get the user with that id
		.get(function (req, res) {
			var username = req.params.username;
			var query = 'SELECT * FROM is421_users WHERE username = "' + username + '"';

			var getUser = dbHelper(query);

			getUser._callback = function (err, rows) {
				if (err)
					throw err;
				
				res.json(rows[0]);
			}
		})

		// update the user with this id
		.put(function (req, res) {

		})

		// delete the user with this id
		.delete(function (req, res) {

		});


	return usersApi;
}