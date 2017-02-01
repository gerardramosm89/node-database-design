const express = require('express');

var app = express();

app.get('/api', (req, res) => {
	res.send({ message: "Hello sir" });	
});

module.exports = app;
