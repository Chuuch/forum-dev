import { Request, Response } from "express";
import User from "../models/user.model";
import {
  getAllUsers,
  getUserById,
  updateUserService,
} from "../services/user.service";

// Get all users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();

    const sanitizedUsers = users.map((user) => ({
      id: user.id,
      email: user.email,
      username: user.username,
      photo: user.photo,
    }));
    res.status(200).json(sanitizedUsers);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

// Get user profile
export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.user?.id;

  try {
    if (!userId) {
      res.status(401).json({ message: "Unauthorized " });
      return;
    }

    const user = await getUserById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const { id, username, email, photo } = user;
    res.status(200).json({ id, username, email, photo });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

// Update user profile
export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.user?.id;
  const { username, email, photo } = req.body;
  try {
    // Check for existing user
    if (!userId) {
      res.status(404).json({ message: "Unauthorized" });
    }

    const updatedUser = await updateUserService(userId, username, email, photo);
    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser?.id,
        username: updatedUser?.username,
        email: updatedUser?.email,
        photo: updatedUser?.photo,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    return;
  }
};
