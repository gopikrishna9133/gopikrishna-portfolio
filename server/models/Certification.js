import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    platform: String,
    url: String,
    order: Number
  },
  { timestamps: true }
);

export default mongoose.model("Certification", certificationSchema);
