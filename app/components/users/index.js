module.exports = users;

var dbHelper = require('../dbHelper');

//delet later, for testing
var config = require('../../../config.js');
var mysql = require('mysql');
var connection = mysql.createConnection(config.dbInfo);

function users (app, express) {
	var usersApi = express.Router();

	// get all users
	usersApi.get('/', function (req, res) {
		var getUsers = dbHelper('SELECT * FROM is421_users');

		getUsers._callback = function (err, rows) {
			if (err)
				throw err;

			res.json(rows);
		};
	});

// add a user
	usersApi.put('/new', function (req, res) {

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
			
	}); //end put addUser

	// update a user
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


	//delete a user
	usersApi.delete('/delete', function (req, res) {

			//get body data
			var form = {};
			form.username = req.body.username;

			//form the query
			var query = 'DELETE FROM is421_users WHERE username = ' + connection.escape(form.username);

			//execute query
			connection.query(query, function(err, rows, fields) {
			    if (err)
					throw err;
				
				res.json(rows);
			});
			
	}); //end put deleteUser 


	//crud on single user
	usersApi.route('/:username')

		// get the user with that id
		.get(function (req, res) {
			var username = req.params.username;
			var query = 'SELECT * FROM is421_users WHERE username = "' + username + '"';

		//execute query
			var getUser = dbHelper(query);

			getUser._callback = function (err, rows) {
				if (err)
					throw err;
				
				res.json(rows[0]);
			}
		})//end get single user



	return usersApi;
}