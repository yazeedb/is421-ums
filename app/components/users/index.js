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
	usersApi.post('/', function (req, res) {

			//get body data
				//gen info
				var form = {};
				form.firstname = req.body.firstname;
				form.lastname = req.body.lastname;
				form.email = req.body.email;
				form.dob = req.body.dob;
				form.gender = req.body.gender;
				form.address = req.body.address;
				//auth info
				form.username = req.body.username;
				form.password = req.body.password;
				form.role = req.body.role;

			//do a quick query with the username to check for duplicate usernames
			//form the query
			// var dup_query = 'SELECT username from is421_auth where username = ' + connection.escape(form.username);
			// res.send(dup_query);
			// //execute query
			// connection.query(dup_query, function(err, rows, fields) {
			//     if (err)
			// 		throw err;

			// 	// if(rows)
			// 		//res.send("username taken");
				
			// 	res.json(rows);
			// });

			//form the query
			var query = 'INSERT INTO is421_users (username,email,firstname,lastname,gender,dob,address,role,date_joined) VALUES(' + connection.escape(form.username) + ',' + connection.escape(form.email) + ',' + connection.escape(form.firstname) + ',' + connection.escape(form.lastname) + ',' + connection.escape(form.gender) + ',' + connection.escape(form.dob) + ',' + connection.escape(form.address) + ',' + connection.escape(form.role) + ',' + connection.escape(form.date_joined) + ')';
			
			//res.send(query);

			//execute query
			connection.query(query, function(err, rows, fields) {
			    if (err)
					throw err;
				
				res.json(rows);
			});
			
	}); //end post addUser

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

		.get(function (req, res) {
			var username = req.params.username;
			var query = 'SELECT * FROM is421_users WHERE username = "' + username + '"';
			var getUser = dbHelper(query);

			getUser._callback = function (err, rows) {
				if (err)
					throw err;
				
				res.json(rows[0]);
			}
		})//end get single user

	return usersApi;
}