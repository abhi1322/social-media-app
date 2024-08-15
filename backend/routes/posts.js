const express = require("express");
const User = require("../models/userModel");
const { createPost, updatePost } = require("../actions/postAction");
const postRouter = express.Router();

postRouter.post("/create", createPost);
postRouter.put("/p/:id", updatePost);

module.exports = postRouter;
