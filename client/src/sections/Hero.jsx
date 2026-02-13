import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Hero({ data }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          {data?.profileImage ? (
            <img
              src={data.profileImage}
              alt="profile"
              className="w-72 h-72 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          ) : (
            <div className="w-72 h-72 bg-surface rounded-full"></div>
          )}
        </div>

        <div>
          <p className="text-textSecondary text-lg">Hi, I’m</p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-textPrimary">
            {data?.name}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-primary">
            {data?.title}
          </h2>

          <p className="text-textSecondary mt-6 max-w-lg leading-relaxed">
            {data?.subtitle}
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-background font-medium rounded-lg hover:opacity-90 transition-transform duration-200 hover:scale-110"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-background transition-transform duration-200 hover:scale-110"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex gap-8 mt-8 text-3xl text-textSecondary">
            {data?.linkedin && (
              <a href={data.linkedin} target="_blank" className="hover:text-primary transition-transform duration-200 hover:scale-110">
                <FaLinkedin />
              </a>
            )}

            {data?.github && (
              <a href={data.github} target="_blank" className="hover:text-primary transition-transform duration-200 hover:scale-110">
                <FaGithub />
              </a>
            )}

            {data?.email && (
              <a href={`mailto:${data.email}`} className="hover:text-primary transition-transform duration-200 hover:scale-110">
                <FaEnvelope />
              </a>
            )}

            {data?.phone && (
              <a href={`tel:${data.phone}`} className="hover:text-primary transition-transform duration-200 hover:scale-110">
                <FaPhone />
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

