const express = require("express");
const {
  getALLUser,
  createUser,
  getUserById,
  deleteUser,
  upDateUser,
  getUserByUsername,
  loginUser,
} = require("../actions/userActions");
const userRouter = express.Router();

userRouter.post("/login", loginUser); // authenticated user
userRouter.get("/all", getALLUser); // get all users
userRouter.post("/u/create", createUser); // create user
userRouter.get("/u", getUserByUsername); // get user by username
userRouter.get("/u/:id", getUserById); // get user by id
userRouter.put("/u/:id", upDateUser); // update user
userRouter.delete("/u/:id", deleteUser); // delete user by id

module.exports = userRouter;
