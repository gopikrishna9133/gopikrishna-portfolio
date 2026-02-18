import { useEffect, useState } from "react";
import {
  fetchHero,
  fetchAbout,
  fetchSkills,
  fetchCertifications,
  fetchProjects,
} from "../services/api";

import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  const [data, setData] = useState({
    hero: null,
    about: null,
    skills: null,
    certifications: [],
    projects: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [hero, about, skills, certifications, projects] =
          await Promise.all([
            fetchHero(),
            fetchAbout(),
            fetchSkills(),
            fetchCertifications(),
            fetchProjects(),
          ]);

        setData({
          hero,
          about,
          skills,
          certifications,
          projects,
        });
      } catch (err) {
        console.error("API Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-textSecondary">Loading...</p>
      </div>
    );
  }

  if (error || !data.hero) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <p className="text-red-500 font-medium mb-4">
            Unable to load portfolio data.
          </p>
          <p className="text-textSecondary text-sm">
            Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar hero={data.hero} />

      <main className="pt-20">
        <Hero data={data.hero} />
        <About data={data.about} />
        <Projects data={data.projects} />
        <Skills data={data.skills} />
        <Certifications data={data.certifications} />
        <Contact />
        <Footer hero={data.hero} />
      </main>
    </>
  );
}
