const router = require("express").Router();

const User = require("../data/helpers/userDb");

// Create user
router.post("/", async (req, res) => {});

// Get users
router.get("/", async (req, res) => {
	try {
		const users = await User.get();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: "Sorry, we couldn't get users" });
	}
});

module.exports = router;
