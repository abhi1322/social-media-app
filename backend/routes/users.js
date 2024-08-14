const express = require("express");
const userRouter = express.Router();

userRouter.get("/", function (req, res) {
  res.end("welcome to user");
});




module.exports = userRouter;
