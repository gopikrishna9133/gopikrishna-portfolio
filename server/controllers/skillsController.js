import Skills from "../models/Skills.js";

export const getSkills = async (req, res) => {
  const skills = await Skills.findOne();
  res.json(skills);
};

export const updateSkills = async (req, res) => {
  const skills = await Skills.findOneAndUpdate(
    {},
    req.body,
    { new: true, upsert: true }
  );

  res.json(skills);
};
