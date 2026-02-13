import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer({ hero }) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Gopi Krishna Kuncham
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Built with React · Node · MongoDB
            </p>
          </div>

          <div className="flex items-center gap-8 text-slate-400 text-sm">

            {hero?.email && (
              <a
                href={`mailto:${hero.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-transform duration-200 hover:scale-110"
              >
                <FaEnvelope />
                <span>{hero.email}</span>
              </a>
            )}

            {hero?.linkedin && (
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-transform duration-200 hover:scale-110"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            )}

          </div>

        </div>

        <div className="mt-6 text-center text-xs text-slate-500 border-t border-slate-800 pt-4">
          © {new Date().getFullYear()} All rights reserved.
        </div>

      </div>
    </footer>
  );
}
