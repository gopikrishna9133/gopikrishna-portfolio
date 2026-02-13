import express from "express";
import {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification
} from "../controllers/certificationController.js";

const router = express.Router();

router.route("/")
  .get(getCertifications)
  .post(createCertification);

router.route("/:id")
  .put(updateCertification)
  .delete(deleteCertification);

export default router;
