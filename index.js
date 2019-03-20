const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

// endpoints
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

const server = express();

// middelware
server.use(express.json());
server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

// route handling
server.use("/api/users", userRoutes);
server.use("/api/posts", postRoutes);

server.listen(3001, () => {
	console.log(`Server now running on http://localhost:3001`);
});
