var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extende: true}));
var dataName = [
	{
		email: 'Victor@gmail.com'
	},
	{
		passvord: '12345678'
	}
];

app.post('/singUp', function (req, res) {
	console.log(req.body);
	res.send('lol')
});


app.listen(4000, function () {
	console.log('app started');
});