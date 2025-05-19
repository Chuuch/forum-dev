import Vote from "../models/vote.model";
import { VoteAttributes } from "../models/vote.model";

export const castVote = async (data: VoteAttributes) => {
  return await Vote.create(data);
};

export const getVotesById = async (postId: string) => {
  return await Vote.findAll({ where: { postId } });
};
