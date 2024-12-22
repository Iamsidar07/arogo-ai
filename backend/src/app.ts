import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app: Express = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://arogo-ai-mauve.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT"],
  }),
);

app.use(express.json());

app.use("/v1", routes);

export default app;
