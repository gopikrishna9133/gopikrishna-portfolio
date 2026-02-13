import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema(
  {
    categories: [
      {
        title: { type: String, required: true },
        items: [String]
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Skills", skillsSchema);
