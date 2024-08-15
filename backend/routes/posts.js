const express = require("express");
const User = require("../models/userModel");
const { createPost } = require("../actions/postAction");
const postRouter = express.Router();

postRouter.post("/create", createPost);

module.exports = postRouter;
