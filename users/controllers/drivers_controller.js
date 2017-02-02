const Driver = require('../models/driver');

module.exports = {
	greeting(req, res) {
		res.send({ message: "Hello there!"});
	},
	create(req, res){
		const driverProps = req.body;
		res.send(driverProps);
		//Driver.create(driverProps).then(driver => res.send(driver));
	}
};
