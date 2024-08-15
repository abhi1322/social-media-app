const express = require("express");
const User = require("../models/userModel");
const {
  createPost,
  updatePost,
  getAllPosts,
  deletePost,
} = require("../actions/postAction");
const postRouter = express.Router({ mergeParams: true });

postRouter.get("/all", getAllPosts); //get all posts
postRouter.post("/p/create", createPost); // create a new post
postRouter.put("/p/:id", updatePost); // update a post
postRouter.delete("/p/:id", deletePost); // delete a post

module.exports = postRouter;
