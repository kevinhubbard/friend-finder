var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

require('./app/routing/api-routes')(app);
require('./app/routing/html-routes')(app);

app.listen(port, function(){
	console.log('app started on port: ' + port);
});