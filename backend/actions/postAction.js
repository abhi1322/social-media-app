const Post = require("../models/postModel");
const User = require("../models/userModel");

// get all posts

const getAllPosts = async (req, res) => {
  console.log("params : ", req.params);
  console.log("query : ", req.query);

  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

// create post and update user
const createPost = async (req, res) => {
  console.log("body", req.body, ", params : ", req.params);
  const { img_url, caption } = req.body;

  if (!req.params.userID || !img_url || !caption) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newPost = await Post({
      userID: req.params.userID,
      img_url: img_url,
      caption: caption,
    });

    newPost.save();

    const userUpdate = await User.findByIdAndUpdate(
      req.params.userID,
      {
        $push: { posts: newPost._id },
      },
      { new: true }
    );

    if (!userUpdate) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send success response
    res.status(201).json({
      message: "Post created successfully and added to user",
      post: newPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// update post
const updatePost = async (req, res) => {
  const { caption } = req.body;

  if (!caption) {
    return res.status(400).json({ message: "Caption is required" });
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        caption: caption,
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Updated post successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// delete post
const deletePost = async (req, res) => {
  console.log(req.params.id);
  try {
    const deletedPost = await Post.findOneAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Remove the post reference from the user's posts array
    await User.findByIdAndUpdate(
      deletedPost.userID,
      { $pull: { posts: req.params.id } },
      { new: true }
    );

    res.status(200).json({ message: "Deleted post successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
};
