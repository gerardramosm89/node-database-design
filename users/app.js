'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');

var app = express();

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test'){
	mongoose.connect('mongodb://localhost:27017/muber');
}
app.use(bodyParser.json());

routes(app);

module.exports = app;
