const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

// Controller
const addcomments = async (req, res) => {
  console.log(req.params);

  try {
    const newComment = new Comment({
      user: req.params.userID,
      comment: req.body.comment,
    });

    await newComment.save();

    const updatePost = await Post.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: newComment._id } },
      { new: true }
    );

    if (!updatePost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(201).json({
      message: "Comment added successfully",
      comment: newComment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// 
const getComment = async (req, res) => {
  try {
    const comments = await Post.findById(req.params.id);

    if (!comments) {
      return res.status(400).json({ message: "Post not found" });
    }

    res.status(200).json({
      message: "Comments fetched successfully",
      comments: comments.comments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }


};



module.exports = { addcomments, getComment };
