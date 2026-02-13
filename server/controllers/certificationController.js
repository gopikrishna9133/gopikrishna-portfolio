import Certification from "../models/Certification.js";

export const getCertifications = async (req, res) => {
  const certs = await Certification.find().sort({ order: 1 });
  res.json(certs);
};

export const createCertification = async (req, res) => {
  const cert = await Certification.create(req.body);
  res.status(201).json(cert);
};

export const updateCertification = async (req, res) => {
  const cert = await Certification.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!cert) {
    return res.status(404).json({ message: "Certification not found" });
  }

  res.json(cert);
};

export const deleteCertification = async (req, res) => {
  const cert = await Certification.findByIdAndDelete(req.params.id);

  if (!cert) {
    return res.status(404).json({ message: "Certification not found" });
  }

  res.json({ message: "Deleted successfully" });
};
