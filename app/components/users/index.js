module.exports = users;

var dbHelper = require('../dbHelper');

function users (app, express) {
	var usersApi = express.Router();

	usersApi.get('/', function (req, res) {
		dbHelper();
	});

	//crud on single user
	usersApi.route('/:uid')

		// get the user with that id
		.get(function (req, res) {
			
		})

		// update the user with this id
		.put(function (req, res) {

		})

		// delete the user with this id
		.delete(function (req, res) {

		});




	return usersApi;
}