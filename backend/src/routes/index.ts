import aiRouter from "./ai.route";
import postRouter from "./post.route";
import express, { Request, Response } from "express";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/posts",
    route: postRouter,
  },
  {
    path: "/summary",
    route: aiRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
