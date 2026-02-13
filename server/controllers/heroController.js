import Hero from "../models/Hero.js";

export const getHero = async (req, res) => {
  const hero = await Hero.findOne();
  res.json(hero);
};

export const createHero = async (req, res) => {
  const existing = await Hero.findOne();
  if (existing) {
    return res.status(400).json({ message: "Hero already exists" });
  }

  const hero = await Hero.create(req.body);
  res.status(201).json(hero);
};

export const updateHero = async (req, res) => {
  const hero = await Hero.findOneAndUpdate({}, req.body, {
    new: true,
  });

  if (!hero) {
    return res.status(404).json({ message: "Hero not found" });
  }

  res.json(hero);
};
