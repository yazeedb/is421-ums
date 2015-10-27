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
	usersApi.route('/:uid')

		// get the user with that id
		.get(function (req, res) {
			var uid = parseInt(req.params.uid);
			var query = 'SELECT * FROM is421_users WHERE uid = ' + uid;

			var getUser = dbHelper(query);

			getUser._callback = function (err, rows) {
				if (err)
					throw err;
				
				res.json(rows);
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