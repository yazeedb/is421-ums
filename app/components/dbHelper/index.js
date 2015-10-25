module.exports = dbHelper;

var config = require('../../../config.js');
var mysql = require('mysql');

function dbHelper () {
	var connection = mysql.createConnection(config.dbInfo);

	connection.connect(function (err) {
		if (err) {
			console.log(err);
			throw err;
		}
		
		connection.query('SELECT * FROM is421_users', function (err, rows) {
			if (err)
				throw err;

			console.log(rows);
		});
	});
}