const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const mongoose  = require('mongoose');  //Mongoose driver
const DB_URI = "mongodb://localhost:27017/sample"
mongoose.connect(DB_URI); //connect to DB
// Connections events
mongoose.connection.once('connected', function() {
	console.log('Database connected to ' + DB_URI)
})
mongoose.connection.on('error', function() {
	console.log('MongoDB connection error ' + err)
})
mongoose.connection.once('disconnected', function(){
	console.log('MongoDB disconnected')
})

// If node process , close mongodb connection
process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('DB disconnect through app termination')
		process.exit(0);
	})
})

var indexRouter = require('./routes/pages');
// var usersRouter = require('./routes/users');
var postsRouter = require('./routes/api/posts');
var usersRouter = require('./routes/api/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/posts', postsRouter);
app.use('/api/users', usersRouter);

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
