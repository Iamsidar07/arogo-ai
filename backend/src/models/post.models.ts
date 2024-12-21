import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    body: {
      type: String,
      required: [true, "Body is required"],
    },
  },
  { timestamps: true },
);
const Post = mongoose.model("post", postSchema);
export default Post;
