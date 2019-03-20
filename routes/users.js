const router = require("express").Router();

const User = require("../data/helpers/userDb");

// error checking middleware
const usersMiddleware = require("../middleware/users");
const checkEmptyUser = usersMiddleware.checkEmptyUser;
const getUser = usersMiddleware.getUser;

// Create user
router.post("/", checkEmptyUser, async (req, res) => {
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
			message: "Sorry, there was an error retrieving that user"
		});
	}
});

// Update user
router.put("/:id", checkEmptyUser, async (req, res) => {
	try {
		const { id } = req.params;

		const updatedUser = await User.update(id, req.body);

		if (!updatedUser)
			return res.status(404).json({
				message: "Sorry, but that user doesn't exist"
			});

		return res.status(200).json({ updatedUser });
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error updating that user"
		});
	}
});

// Delete user
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.remove(id);

		if (!user)
			return res
				.status(404)
				.json({ message: "Sorry, that user doesn't exist" });

		return res.status(200).json(user);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error deleting that user"
		});
	}
});

module.exports = router;
