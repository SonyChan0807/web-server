var express = require('express');
var app = express();
var PORT = 3000;


var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function (req, res ,next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

app.use(middleware.logger);

//app.use(middleware.requireAuthentication);

// app.get('/', function (req, res) {
// 	res.send('Hello Epress!');
// });

app.get('/about', function (req, res) {
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(PORT, function () {
	console.log('Epress serve started on port ' + PORT + '!');
});
