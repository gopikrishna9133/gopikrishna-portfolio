export default function Skills({ data }) {
  if (!data) return null;

  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-16 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {data.categories?.map((category, index) => (
            <div key={index}>

              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-md bg-background border border-primary/30 text-textPrimary hover:border-primary transition-transform duration-200 hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
