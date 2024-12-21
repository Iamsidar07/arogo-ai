import app from "./app";
import mongoose from "mongoose";
import config from "./config";

mongoose.connect(config.uri!).then(() => {
  console.log("Mongodb connected");
  app.listen(config.port || 50000, () =>
    console.log("Backend is running on", config.port || 5000),
  );
});
