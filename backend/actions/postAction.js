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

const updatepost = async (req, res) => {


};

module.exports = {
  createPost,
};
