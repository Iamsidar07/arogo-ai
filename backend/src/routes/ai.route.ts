import express from "express";
import aiControllers from "../controllers/ai.controller";

const aiRouter = express.Router();

aiRouter.get("/:id", aiControllers.createSummaryHandler);

export default aiRouter;
