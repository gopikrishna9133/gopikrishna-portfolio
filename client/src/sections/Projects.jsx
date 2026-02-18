import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>

        <p className="text-center text-textSecondary mb-16 max-w-2xl mx-auto">
          A selection of projects that reflect my skills and experience.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data.map((project) => (
            <div
              key={project._id}
              className="bg-surface p-6 rounded-xl border border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-3 text-textPrimary">
                {project.title}
              </h3>

              <p className="text-textSecondary text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-background rounded-full text-primary border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 text-sm font-medium items-center">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline transition-transform duration-200 hover:scale-105"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline transition-transform duration-200 hover:scale-105"
                  >
                    <FiExternalLink />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
