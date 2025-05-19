import express from "express";
import * as postController from "../controllers/post.controller";

const postRouter = express.Router();
postRouter.post("/", postController.create);
postRouter.get("/", postController.getAllPosts);
postRouter.get("/:id", postController.getById);
postRouter.patch("/:id", postController.update);
postRouter.delete("/:id", postController.remove);

export default postRouter;
