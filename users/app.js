const express = require('express');
const routes = require('./routes/routes');
var app = express();

app.get('/api', (req, res) => {
	res.send({ message: "Hello sir" });	
});

routes(app);

module.exports = app;
