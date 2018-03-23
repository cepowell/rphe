var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

var routes = require('./routes')(app);

app.listen(port, function () {
  console.log('Application is running on http://localhost:' + port);
});
