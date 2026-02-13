import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: String,
    profileImage: String,
    github: String,
    linkedin: String,
    email: String,
    phone: String,
  },
  { timestamps: true }
);

export default mongoose.model("Hero", heroSchema);
