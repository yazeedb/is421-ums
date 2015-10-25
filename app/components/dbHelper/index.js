//is421_users

module.exports = dbHelper;

var config = require('../../../config.js');
var mysql = require('mysql');

function dbHelper () {
	var connection = mysql.createConnection(config.dbInfo);
	connection.connect();

	connection.query('SELECT 1 + 1 AS solution',
		function(err, rows, fields) {
			if (err) throw err;
			console.log(rows);
			console.log('The solution is: ', rows[0].solution);
		});

	connection.end();
}