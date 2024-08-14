const express = require("express");
const { getALLUser, createUser } = require("../actions/userActions");
const userRouter = express.Router();

userRouter.get("/getusers", getALLUser); // get all users

userRouter.post("/create", createUser); // create user

module.exports = userRouter;
