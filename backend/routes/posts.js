const express = require("express");
const {
  createPost,
  updatePost,
  getAllPosts,
  deletePost,
  getPostById,
  
} = require("../actions/postAction");
const { addcomments, getComment } = require("../actions/commentAction");
const postRouter = express.Router({ mergeParams: true });

// post routes
postRouter.get("/all", getAllPosts); //get all posts
postRouter.get("/p/:id", getPostById); //create
postRouter.post("/p/create", createPost); // create a new post
postRouter.put("/p/:id", updatePost); // update a post
postRouter.delete("/p/:id", deletePost); // delete a post

//  commment routes
postRouter.get("/p/:id/c", getComment);
postRouter.post("/p/:id/c", addcomments)


module.exports = postRouter;
