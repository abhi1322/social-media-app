const express = require("express");
const {
  getALLUser,
  createUser,
  getUserById,
  deleteUser,
  upDateUser,
} = require("../actions/userActions");
const { updateMany } = require("../models/userModel");
const userRouter = express.Router();

userRouter.get("/all", getALLUser); // get all users

userRouter.post("/u/create", createUser); // create user

userRouter.get("/u/:id", getUserById); // get user by id

userRouter.put("/u/:id", updateMany); // update user

userRouter.delete("/u/:id", deleteUser); // delete user by id

module.exports = userRouter;
