import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import config from "./config";
import routes from "./routes";

dotenv.config();

const app: Express = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
  }),
);
app.use(express.json());

app.use("/v1", routes);

export default app;
