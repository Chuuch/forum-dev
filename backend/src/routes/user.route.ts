import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  getProfile,
  getUsers,
  updateProfile,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.get("/profile", authMiddleware, getProfile);
userRouter.put("/update", authMiddleware, updateProfile);

export default userRouter;
