const Post = require("../models/postModel");
const User = require("../models/userModel");

// create post and update user
const createPost = async (req, res) => {
  console.log(req.body);
  const { userID, img_url, caption } = req.body;

  if (!userID || !img_url || !caption) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newPost = await Post({
      img_url: img_url,
      caption: caption,
    });

    newPost.save();

    const userUpdate = await User.findByIdAndUpdate(
      userID,
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

module.exports = {
  createPost,
  updatePost,
};
