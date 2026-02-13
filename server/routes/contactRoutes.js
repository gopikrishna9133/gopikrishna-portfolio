import express from "express";
import {
  createContact,
  getContacts,
} from "../controllers/contactController.js";

const router = express.Router();

router.route("/")
  .post(createContact)
  .get(getContacts);

export default router;
