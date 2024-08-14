const express = require("express");
const postRouter = express.Router();

postRouter.get("/", function (req, res) {
  res.end("welcome to post");
});

module.exports = postRouter;
