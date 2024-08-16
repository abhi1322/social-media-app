const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const hashPassword = require("../utils/encrypt");

// Authentication

const loginUser = async (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await User.findOne({ username: username });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.json({ token });
  }
  res.status(401).send("Invalid email or password");
};

// create a user
const createUser = async (req, res) => {
  const { name, email, password, firstname, lastname, username } = req.body;

  if (!email || !password || !firstname || !lastname || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const hashPass = await hashPassword(password);
  //   console.log("hasded" + hashPass);

  const user = new User({
    username: username,
    email: email,
    password: hashPass,
    firstname: firstname,
    lastname: lastname,
  });

  await user.save().then((result) => {
    res
      .status(201)
      .json({ message: "User created successfully", user: result });
  });
};

// get alluser
const getALLUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).status(200).json({ message: "Data of All users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// get user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate({
      path: "posts",
      model: "Post",
      populate: {
        path: "comments",
        model: "Comment",
      },
    });
    if (user) {
      return res.status(200).json({ user, message: "User found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "User not found" });
  }
};

// get user by username
const getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(200).json({ user, message: "User found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "User not found" });
  }
};

// Update user by id
const upDateUser = async (req, res) => {
  const data = req.body;

  try {
    const newUser = await User.findOneAndUpdate({ _id: req.params.id }, data, {
      new: true,
    });

    if (!newUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error updating user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      return res.status(200).json({ user, message: "User deleted" });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "User not deleted" });
  }
};

module.exports = {
  createUser,
  getALLUser,
  getUserById,
  deleteUser,
  upDateUser,
  getUserByUsername,
  loginUser,
};
