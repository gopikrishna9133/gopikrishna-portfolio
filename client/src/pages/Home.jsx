import { useEffect, useState } from "react";
import { fetchHero, fetchAbout, fetchSkills, fetchCertifications} from "../services/api";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  const [hero, setHero] = useState(null);
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState(null);
  const [certifications, setCertifications] = useState(null);

  useEffect(() => {
    fetchHero().then(setHero);
    fetchAbout().then(setAbout);
    fetchSkills().then(setSkills);
    fetchCertifications().then(setCertifications);
  }, []);

  if (!hero) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="pt-20">
      <Hero data={hero} />
      <About data={about} />
      <Projects />
      <Skills data={skills} />
      <Certifications data={certifications} />
      <Contact  />
      <Footer hero={hero} />
    </main>
  );
}
