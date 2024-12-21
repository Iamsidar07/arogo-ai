import { Request, Response } from "express";
import { catchAsync } from "../utils/lib";
import Post from "../models/post.models";

const createPostHandler = catchAsync(async (req: Request, res: Response) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: "Missing filelds" });
  }
  const post = await Post.create({ title, body });
  return res.status(201).json(post);
});

const getAllPostsHandler = catchAsync(async (req: Request, res: Response) => {
  const posts = await Post.find({});
  return res.status(200).json(posts);
});

const getSinglePostHandler = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Id is required" });
  }
  const post = await Post.findById(id);
  if (!post) {
    return res.status(404).json({ error: "Not found" });
  }
  return res.status(200).json(post);
});

const updatePostHandler = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const post = await Post.findByIdAndUpdate(id, { title, body }, { new: true });
  return res.status(200).json(post);
});

const deletePostHandler = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) return res.status(404).json({ error: "Not found" });
  await Post.findByIdAndDelete(id);
  return res.status(200).json({ mesage: "Post deleted successfully" });
});

const postControllers = {
  createPostHandler,
  getAllPostsHandler,
  getSinglePostHandler,
  updatePostHandler,
  deletePostHandler,
};
export default postControllers;
