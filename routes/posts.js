const router = require("express").Router();

const Post = require("../data/helpers/postDb");

// post middleware
const postMiddleware = require("../middleware/posts");
const checkPost = postMiddleware.checkPost;

// Create post
router.post("/", checkPost, async (req, res) => {
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

// Get all posts
router.post("/", async (req, res) => {});

module.exports = router;
