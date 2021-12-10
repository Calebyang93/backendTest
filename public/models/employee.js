import dbConnection from "../controller/dbconfig";

function addEmployee(name, daysWorked, cafe, id, callback) {
    dbConnection.connEmployee.connection(function (err) {
        if (err) {
            console.log(err);
            return callback(err,null);
        } else {
            console.log("Connected to Employees DB");
            var empSql = 'INSERT into employees(name, daysWorked, cafe, id) values (?,?,?,?)';
            conn.query(empSql, [name, daysWorked, cafe, id],
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