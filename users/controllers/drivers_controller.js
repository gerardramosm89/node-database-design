const Driver = require('../models/driver');

module.exports = {
	greeting(req, res) {
		res.send({ message: "Hello there!"});
	},
	create(req, res, next){
		const driverProps = req.body;
		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(() => {
				res.send( { 'Error Message': 'Contact admin about the error' });
				next
			});
	}
};
