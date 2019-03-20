module.exports = {
	createUser: (req, res, next) => {
		const { name } = req.body;

		if (!name)
			return res
				.status(400)
				.json({ message: "Sorry, make sure all fields aren't empty" });

		next();
	},
	getUser: (req, res, next) => {
		const { id } = req.body;

		if (!id)
			return res
				.status(400)
				.json({ message: "Sorry, make sure all fields aren't empty" });

		next();
	}
};
