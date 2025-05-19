import Post from "../models/post.model";
import { PostAttributes } from "../models/post.model";

export const createPost = async (data: PostAttributes) => {
  return await Post.create(data);
};

export const getAllPosts = async () => {
  return await Post.findAll();
};

export const getPostById = async (id: string) => {
  return await Post.findByPk(id);
};

export const editPost = async (id: string, data: Partial<PostAttributes>) => {
  return await Post.update(data, { where: { id } });
};

export const deletePost = async (id: string) => {
  return await Post.destroy({ where: { id } });
};
