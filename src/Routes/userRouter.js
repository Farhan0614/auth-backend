import express from "express";
import {
  login,
  profile,
  signup,
  update,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/profile", profile);
userRouter.post("/register", signup);
userRouter.post("/login", login);
userRouter.get("/update", update);

export default userRouter;
