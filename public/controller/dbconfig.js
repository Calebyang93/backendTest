let mysql = require('mysql');

function dbConnection() {
    let connCafe = mysql.createConnection({
        host: 'localhost:3306',
        user: 'root',
        password: 12345,
        database: 'cafelocation'
    });
    
    connCafe.connect(function(err) {
        if (err) {
            return console.error('error: ' + err.message);
        }
        console.log('Cafe DB connected. Begin search.');
    });
    
    connCafe.end(function (err) {
        if (err) {
            return console.log('Error:' + err.message);
        }
        console.log('Connection to Cafe DB has been closed')
    });
    
    let connEmployee = mysql.createConnection({
        host: 'localhost:3306',
        user: 'root',
        password: 12345,
        database: 'employees'
    });
    
    connEmployee.connect(function(err) {
        if (err) {
            return console.error('error: ' + err.message);
        }
        console.log('Employee DB connected. Begin search.');
    });
    
    connEmployee.end(function (err) {
        if (err) {
            return console.log('Error:' + err.message);
        }
        console.log('Connection to Employee DB has been closed')
    });
}



module.exports = dbConnection;