const router = require("express").Router();

const User = require("../data/helpers/userDb");

// error checking middleware
const usersMiddleware = require("../middleware/users");
const notEmpty = usersMiddleware.notEmpty;

// Create user
router.post("/", notEmpty, async (req, res) => {
	try {
		const user = req.body;

		const newUser = await User.insert(user);
		res.status(201).json(newUser);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error creating that user"
		});
	}
});

// Get users
router.get("/", async (req, res) => {
	try {
		const users = await User.get();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: "Sorry, we couldn't get users" });
	}
});

// Get users by id
router.get("/:id", async (req, res) => {});

module.exports = router;
