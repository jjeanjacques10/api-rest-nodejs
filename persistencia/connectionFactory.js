var mysql  = require('mysql');

function createDBConnection(){
	return mysql.createConnection({
		host: '',
		user: '',
		password: '',
		database: 'payfast'
	});
}

module.exports = function() {
	return createDBConnection;
}
