var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'q57yawiwmnaw13d2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'elhkzp08en6iu06w',
        password: 'n755802ifu9bfqdx',
        database: 'mmu9e8b4i4rcmxce'
    });
};

connection.connect();
module.exports = connection;