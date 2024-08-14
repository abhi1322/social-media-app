const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const hashPassword = require("../utils/encrypt");

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

const getALLUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).status(200).json({ message: "Data of All users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

module.exports = { createUser, getALLUser };
