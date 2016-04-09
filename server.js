var express    = require('express');
var app        = express();
var port = process.env.PORT || 8000;

app.use(function(req, res, next) {
	res.setHeader(
		'Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type');
	next();
});

app.use(express.static(__dirname + '/static'));

app.listen(port);
