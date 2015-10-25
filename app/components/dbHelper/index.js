module.exports = dbHelper;

var config = require('../../../config.js');
var mysql = require('mysql');

function dbHelper (query) {
	var connection = mysql.createConnection(config.dbInfo);

	var q = connection.query(query);
	return q;
}