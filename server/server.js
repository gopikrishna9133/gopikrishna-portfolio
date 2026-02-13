import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import skillsRoutes from "./routes/skillsRoutes.js";
import certificationRoutes from "./routes/certificationRoutes.js";



dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://gopikrishna-portfolio-sandy.vercel.app/"
    ]
  }));
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/certifications", certificationRoutes);



app.get("/", (req, res) => {
  res.send("Portfolio API Running");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
