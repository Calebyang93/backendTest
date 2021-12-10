import dbConnection from "../controller/dbconfig";

function addCafe(name, description, employees, logo, location, id, callback) {
    var conn = db.getConnection();
    dbConnection.connCafe.connection(function (err) {
        if (err) {
            console.log(err);
            return callback(err,null);
        } else {
            console.log("Connected to Cafe DB");
            var cafeSql = 'INSERT into cafelocation(name, description, employees, logo, location) values (?,?,?,?,?)';
            conn.query(cafeSql, [name, description, employees, logo, location, id],
                function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        console.log(result.affectedRows);
                        return callback(null, result.affectedRows);
                    }
                });
        }
    })
}