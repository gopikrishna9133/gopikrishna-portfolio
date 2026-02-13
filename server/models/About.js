import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },

    experience: [
      {
        role: String,
        company: String,
        duration: String
      }
    ],

    education: [
      {
        degree: String,
        institution: String,
        graduation: String,
        gpa: String
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("About", aboutSchema);
