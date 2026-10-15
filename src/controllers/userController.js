import jwt from "jsonwebtoken";

import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
  });
};

export const signup = catchAsync(async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  createSendToken(newUser, 200, res);
});

export const login = (req, res, next) => {
  res.status(200).json({ status: "success", message: "Login hit" });
};

export const profile = catchAsync(async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "this is user data",
  });
});

export const update = (req, res, next) => {
  res.status(200).json({ status: "success", message: "Update hit" });
};
