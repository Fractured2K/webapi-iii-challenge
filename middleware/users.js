module.exports = {
	notEmpty: (req, res, next) => {
		const { name } = req.body;

		if (!name)
			return res
				.status(400)
				.json({ message: "Sorry, make sure all fields aren't empty" });

		next();
	}
};
