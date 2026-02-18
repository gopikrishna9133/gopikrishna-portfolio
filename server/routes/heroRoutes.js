import express from "express";
import {
  getHero,
  createHero,
  updateHero,
} from "../controllers/heroController.js";

const router = express.Router();

router.route("/").get(getHero).post(createHero).put(updateHero);

export default router;
