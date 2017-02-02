const Driver = require('../models/driver');

module.exports = {
	greeting(req, res) {
		res.send({ message: "Hello there!"});
	},
	create(req, res, next){
		const driverProps = req.body;
		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(next);
	},
	edit(req, res, next){
		const driverId = req.params.id;
		const driverProps = req.body;

		Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
			.then(() => Driver.findById({ _id: driverId}))
			.then(driver => res.send(driver))
			.catch(next);
	},
	delete(req, res, next){
		const driverId = req.params.id;
		const driverProps = req.body;

		Driver.findByIdAndRemove({ _id: driverId }, driverProps)
			//.then(() => Driver.findById({ _id: driverId}))
			.then(driver => res.send({ message: "User was deleted"}))
			.catch(next);
	}
};
