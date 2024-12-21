import express from "express";
import postControllers from "../controllers/post.controller";

const postRouter = express.Router();

postRouter.post("/", postControllers.createPostHandler);
postRouter.get("/", postControllers.getAllPostsHandler);
postRouter.get("/:id", postControllers.getSinglePostHandler);
postRouter.put("/:id", postControllers.updatePostHandler);
postRouter.delete("/:id", postControllers.deletePostHandler);

export default postRouter;
