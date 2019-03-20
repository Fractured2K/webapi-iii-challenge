module.exports = {
	checkUser: (req, res, next) => {
		const { name } = req.body;

		if (!name)
			return res
				.status(400)
				.json({ message: "Sorry, make sure all fields aren't empty" });

		// check for capitalization in user name
		const capitalizeName =
			name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

		const uncapitalizedName = name.charAt(0) + name.slice(1).toLowerCase();

		if (uncapitalizedName !== capitalizeName)
			return res.status(400).json({
				message: "Please make sure the first letter is capitalized"
			});

		next();
	}
};
