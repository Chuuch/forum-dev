import { Op } from "sequelize";
import User from "../models/user.model";
import { UserProps } from "../types/types";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

export const registerUser = async (
  username: string,
  email: string,
  password: string,
  photo?: string
): Promise<UserProps> => {
  const existingUser = await User.findOne({
    where: {
      [Op.or]: [{ username }, { email }],
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
    photo,
  });
  return {
    user: {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      photo: newUser.photo,
    },
  };
};

export const loginUser = async (
  email: string,
  password: string
): Promise<UserProps> => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user.id);

  return {
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      photo: user.photo,
    },
    token,
  };
};
