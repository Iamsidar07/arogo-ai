import { Request, Response } from "express";
import Post from "../models/post.models";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { catchAsync } from "../utils/lib";

const createSummaryHandler = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) return res.status(404).json({ error: "Not found" });
  const systemPrompt = `
        You are an AI assistant specialized in creating concise and accurate summaries of text content.
        The summary should capture the main idea and key points in a clear and engaging way, suitable for a general audience.
      `;

  const userPrompt = `
        Please summarize the following blog post:
        "Title: ${post.title}\n\nContent: ${post.body}"
      `;
  const { text } = await generateText({
    model: google("models/gemini-1.5-pro-latest"),
    prompt: userPrompt,
    system: systemPrompt,
    temperature: 0.7,
    maxTokens: 200,
    topP: 0.9,
  });
  return res.status(200).json({ summary: text });
});
const aiControllers = {
  createSummaryHandler,
};
export default aiControllers;
