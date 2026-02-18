import { useEffect, useState } from "react";

export default function Navbar({ hero }) {
  const [active, setActive] = useState("");

  const sections = ["about", "projects", "skills", "certifications", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        if (
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          currentSection = section;
          break;
        }
      }

      if (currentSection !== active) {
        setActive(currentSection);

        if (currentSection) {
          window.history.replaceState(null, "", `#${currentSection}`);
        } else {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
            setActive("");
          }}
          className="text-xl font-semibold tracking-wide text-white transition-transform duration-200 hover:scale-110"
        >
          {hero?.name || "Gopi Krishna Kuncham"}
        </button>

        <div className="hidden md:flex items-center gap-8 ">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`capitalize relative transition-all duration-200 transform hover:scale-110  ${
                active === section
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-200"
              }`}
            >
              {section}

              {active === section && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyan-400 rounded"></span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
