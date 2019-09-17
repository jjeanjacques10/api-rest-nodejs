var mysql  = require('mysql');

function createDBConnection(){
		return mysql.createConnection({
			host: '172.20.0.2',
			user: 'docker',
			password: 'banana pijama',
			database: 'payfast'
		});
}

module.exports = function() {
	return createDBConnection;
}
