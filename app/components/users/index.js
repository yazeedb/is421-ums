module.exports = users;

function users (app, express) {
	var usersApi = express.Router();

	usersApi.get('/', function (req, res) {
		res.json({
			success: true,
			message: 'GET all users'
		});
	});

	//crud on single user
	usersApi.route('/:uid')

		// get the user with that id
		.get(function (req, res) {
			//sql query or service
		})

		// update the user with this id
		.put(function (req, res) {

		})

		// delete the user with this id
		.delete(function (req, res) {

		});




	return usersApi;
}