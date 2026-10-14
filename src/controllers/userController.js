import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

export const signup = catchAsync(async (req, res) => {
  console.log(req.body);
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
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
