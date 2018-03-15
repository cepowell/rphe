var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/gallery', function(req, res) {
  res.render('gallery');
});

app.get('/what-we-do', function(req, res) {
  res.render('what-we-do');
});

app.get('/who-we-are', function(req, res) {
  res.render('who-we-are');
});

app.get('/stories', function(req, res) {
  res.render('stories');
});

app.listen(port, function () {
  console.log('Application is running on http://localhost:' + port);
});
