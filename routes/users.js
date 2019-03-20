const router = require("express").Router();

const User = require("../data/helpers/userDb");

// error checking middleware
const usersMiddleware = require("../middleware/users");
const createUser = usersMiddleware.createUser;
const getUser = usersMiddleware.getUser;

// Create user
router.post("/", createUser, async (req, res) => {
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
router.post("/:id", getUser, async (req, res) => {
	try {
		const { id } = req.body;

		const user = await User.getById(id);

		if (!user)
			return res
				.status(404)
				.json({ message: "Sorry, but that user doesn't exist" });

		return res.status(200).json(user);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error retrieving that user"
		});
	}
});

module.exports = router;
