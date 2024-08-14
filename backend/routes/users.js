const express = require("express");
const {
  getALLUser,
  createUser,
  getUserById,
  deleteUser,
} = require("../actions/userActions");
const userRouter = express.Router();

userRouter.get("/getusers", getALLUser); // get all users

userRouter.post("/create", createUser); // create user

userRouter.get("/u/:id", getUserById); // get user by id

userRouter.delete("/u/:id", deleteUser); // delete user by id

module.exports = userRouter;
