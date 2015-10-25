module.exports = dbHelper;

var config = require('../../../config.js');
var mysql = require('mysql');

function dbHelper () {
	var connection = mysql.createConnection({
		user: 'root',
		password: 'root',
		port: 8889
	});

	connection.connect(function (err) {
		if (err) {
			console.log(err);
			throw err;
		}
		
		console.log('connect to db');	
	});
}