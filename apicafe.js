const mysql = require('mysql');
const express = require('express');
const dbConnection = require('./public/controller/dbconfig');
const SqlString = require('mysql/lib/protocol/SqlString');

var app = express();

//  GET API for locations
app.get('/cafes?location={location}', function (req, res) {
    if (req.location == cafelocation.location ) {
        const SQLSTMT = 'SELECT name FROM cafelocation where location = ? SORTBY COUNT(employees) max';
        return connCafe.query(SQLSTMT);
    } else {
        res.error(404);
        return;

    }
})

// POST API for locations 
app.post('/api/cafe', function(req, res) {
    var name = req.body.name;
    var description = req.body.description;
    var employees = req.body.employees;
    var logo = req.body.logo;
    var location = req.body.location;
    var id = req.body.id;
    cafe.addCafe(name, description, employees, logo, location, id, function(err, result) {
        if (!err ) {
            console.lof(result);
            res.send(result + 'record inserted');
        } else {
            res.send(err.statusCode);
        }
    });
})

// Get API for employees
app.get('/cafes/{employees}', function (req, res) {
    if (req.name == employees.name ) {
        const SQLSTMT2 = 'SELECT name, id FROM employees SORTBY COUNT(days) desc';
        return connEmployee.query(SQLSTMT2);
    } else {
        res.error(404);
        return;

    }
})

//  Post  API for employees
app.post('/api/cafe/employee', function(req, res) {
    var name = req.body.name;
    var daysWorked = req.body.daysWorked;
    var cafe = req.body.cafe;
    var id = req.body.id;
    cafe.addEmployee(name, daysWorked, cafe, id, function(err, result) {
        if (!err ) {
            console.lof(result);
            res.send(result + 'record inserted');
        } else (req.name  === employees.name) {
            res.send(err.statusCode);
            console.log('Employee cannot work in more than 1 location');
        }
    });
})

module.exports = app;
