import express from "express";
import { getSkills, updateSkills } from "../controllers/skillsController.js";

const router = express.Router();

router.route("/")
  .get(getSkills)
  .put(updateSkills);

export default router;
