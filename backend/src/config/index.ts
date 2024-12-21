import dotenv from "dotenv";
dotenv.config();
const config = Object.freeze({
  uri: process.env.MONGO_URI,
  port: 5000,
  frontendUrl: process.env.FRONTEND_URL,
});

export default config;
