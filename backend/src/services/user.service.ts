import User from "../models/user.model";

export const getUserById = async (userId: string): Promise<User | null> => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    console.error(`Error fetching user with ID: ${userId}:`, error);
    throw error;
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error getting all users:", error.message);
    } else {
      console.error("Unexpected error getting all users:", error);
    }
    throw error;
  }
};

export const updateUserService = async (
  userId: string,
  username: string,
  email: string,
  photo: string
): Promise<User | null> => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const updatedUser = await user.update({ username, email, photo });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
