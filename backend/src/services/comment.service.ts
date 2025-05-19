import Comment from "../models/comment.model";
import { CommentAttributes } from "../models/comment.model";

export const createComment = async (data: CommentAttributes) => {
  return await Comment.create(data);
};

export const getCommentsByPostId = async (postId: string) => {
  return await Comment.findAll({ where: { postId } });
};

export const editComment = async (id: string, content: string) => {
  return await Comment.update({ content }, { where: { id } });
};

export const deleteComment = async (id: string) => {
  return await Comment.destroy({ where: { id } });
};
