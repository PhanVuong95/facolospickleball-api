import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);
