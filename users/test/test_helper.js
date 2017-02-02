'use strict'
const mongoose = require('mongoose');

before(done => {
	mongoose.connect('mongodb://localhost:27017/muber_test');
	mongoose.connection
		.once('open', () => done())
		.on('error', err => {
			console.warn('Warning', error);
		});
});

beforeEach(done => {
	//const { drivers } = mongoose.connection.collections;
	const theDrivers = mongoose.connection.collections.drivers;
	theDrivers.drop()
		.then(() => done())
		.catch(() => done());
});