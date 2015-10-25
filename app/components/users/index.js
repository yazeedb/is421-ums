module.exports = users;

function users (app, express) {
	var usersApi = express.Router();

	usersApi.get('/', function (req, res) {
		res.json({
			success: true,
			message: 'GET all users'
		});
	});

	return usersApi;
}