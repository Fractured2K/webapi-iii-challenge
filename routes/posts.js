const router = require("express").Router();

const Post = require("../data/helpers/postDb");

// Create post
router.post("/", async (req, res) => {
	try {
		const post = req.body;

		const newPost = await Post.insert(post);
		res.status(201).json(newPost);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error creating that post"
		});
	}
});

module.exports = router;
