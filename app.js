var express = require('express');
var path = require('path');
var cons = require('consolidate');

var index = require('./routes/index');

var app = express();

// view engine setup
app.engine("html", cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//app.use(express.static(__dirname + "views"));

// uncomment after placing your favicon in /public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(process.env.PORT || 5000, function () {
    console.log("Running...");
})

//module.exports = app;
