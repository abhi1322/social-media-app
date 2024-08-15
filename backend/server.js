const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/posts.js");
const userRouter = require("./routes/users.js");
const connectDB = require("./db/connectDB.js");
require("dotenv").config();

// port
const port = process.env.PORT;
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connect database
connectDB();

// routes
app.use("/users", userRouter); // user routes
app.use("/:userID/posts", postRouter); // post routes


// server listener
app.listen(port, () => {
  console.log("\n\tSocialmedia  App backend ");
  console.log(`\tServer is running on port : http://localhost:${port}`);
});
