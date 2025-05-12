import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/profile", getUserProfile);
userRouter.put("/profile", updateUserProfile);

export default userRouter;
