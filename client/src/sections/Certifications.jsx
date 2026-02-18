import { FiExternalLink } from "react-icons/fi";
export default function Certifications({ data }) {
  if (!data) return null;

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((cert) => (
            <div
              key={cert._id}
              className="bg-surface p-6 rounded-xl border border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold text-textPrimary mb-2">
                {cert.title}
              </h3>

              <p className="text-textSecondary text-sm mb-6">{cert.platform}</p>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline text-primary font-medium transition-transform duration-200 hover:scale-105"
                >
                  <FiExternalLink className="text-lg" />
                  <span>View Certificate →</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
