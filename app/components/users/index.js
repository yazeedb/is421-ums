module.exports = users;

var dbHelper = require('../dbHelper');

//delet later, for testing
var config = require('../../../config.js');
var mysql = require('mysql');
var connection = mysql.createConnection(config.dbInfo);

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

	usersApi.put('/update', function (req, res) {

			//get body data
			var form = {};
			form.username = req.body.username;
			form.updateField = req.body.updateField;
			form.updateValue = req.body.updateValue;

			//form the query
			var query = 'UPDATE is421_users SET ' + form.updateField + '=' +  connection.escape(form.updateValue)  + ' WHERE username = ' + connection.escape(form.username);

			//execute query
			connection.query(query, function(err, rows, fields) {
			    if (err)
					throw err;
				
				res.json(rows);
			});
			
	}); //end put updateUser 

	//crud on single user
	// usersApi.route('/:uid')

	// 	// get the user with that id
	// 	.get(function (req, res) {
	// 		var uid = parseInt(req.params.uid);
	// 		var query = 'SELECT * FROM is421_users WHERE uid = ' + uid;

	// 		var getUser = dbHelper(query);

	// 		getUser._callback = function (err, rows) {
	// 			if (err)
	// 				throw err;
				
	// 			res.json(rows);
	// 		}
	// 	})

	// 	// update the user with this id
	// 	.put(function (req, res) {

	// 	})

	// 	// delete the user with this id
	// 	.delete(function (req, res) {

	// 	});


	return usersApi;
}