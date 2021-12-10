var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//Get API for coffee and beers
app.get('/drinks/{beer}', function(req, res) {
    if (req === null || req !== "beer") {
        delete req.params();
        return error('Enter a valid beer drink');
    } else {
        res.fetch('https://api.sampleapis.com/beers/ale');
        res.send('Collect Beer information');
    }
})

// For api not labelled type 
app.get('/drinks/{type}', function (req, res) {
    if (req === '') {
        return req.params().sortBy('rating');
    } else if (req !== 'coffee' || req !== 'beer') {
        return error("Invalid drink, please enter a new one");
    } else {
        return;
    }
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
