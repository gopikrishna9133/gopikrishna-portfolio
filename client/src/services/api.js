import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchHero = async () => {
  const res = await API.get("/hero");
  return res.data;
};

export const updateHero = async (data) => {
  const res = await API.put("/hero", data);
  return res.data;
};

export const fetchAbout = async () => {
  const res = await API.get("/about");
  return res.data;
};

export const fetchProjects = async () => {
  const res = await API.get("/projects");
  return res.data;
};

export const fetchSkills = async () => {
  const res = await API.get("/skills");
  return res.data;
};


export const fetchCertifications = async () => {
  const res = await API.get("/certifications");
  return res.data;
};

export const sendContact = async (data) => {
  const res = await API.post("/contact", data);
  return res.data;
};
