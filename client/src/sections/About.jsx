export default function About({ data }) {
  if (!data) return null;

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          About Me
        </h2>

        <p className="text-textSecondary text-center max-w-3xl mx-auto mb-16">
          {data.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Experience
            </h3>

            {data.experience?.map((exp, i) => (
              <div key={i} className="mb-6 bg-background p-6 rounded-xl transition-transform duration-200 hover:scale-110">
                <h4 className="font-semibold">{exp.role}</h4>
                <p className="text-textSecondary">{exp.company}</p>
                <p className="text-sm text-textSecondary">{exp.duration}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Education
            </h3>

            {data.education?.map((edu, i) => (
              <div key={i} className="mb-6 bg-background p-6 rounded-xl transition-transform duration-200 hover:scale-110">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-textSecondary">{edu.institution}</p>
                <p className="text-sm text-textSecondary">{edu.graduation} {edu.gpa && `- ${edu.gpa} GPA`}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
