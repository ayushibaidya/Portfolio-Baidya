const courseworkProjects = [
  {
    title: "Add coursework project",
    course: "Course name",
    description:
      "Add a concise description of the project, what you built, and the technical result.",
    tags: ["Technology", "Concept", "Tool"],
  },
  {
    title: "Add coursework project",
    course: "Course name",
    description:
      "Use this card for systems, backend, Java, database, algorithms, or embedded-related coursework.",
    tags: ["Technology", "Concept", "Tool"],
  },
  {
    title: "Add coursework project",
    course: "Course name",
    description:
      "Keep each project short and technical so this section supports the main featured projects.",
    tags: ["Technology", "Concept", "Tool"],
  },
]

export default function AcademicCoursework() {
  return (
    <section
      id="academic-coursework"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-licorice relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">
        Academic Coursework
      </h2>
      <p className="max-w-2xl text-center text-licorice/75 mb-10">
        A space for additional technical coursework projects beyond the featured project list.
      </p>

      <div className="max-w-6xl w-full grid gap-6 md:grid-cols-3">
        {courseworkProjects.map((project, index) => (
          <article
            key={`${project.title}-${index}`}
            className="bg-antiqueWhite/90 border border-dustyRose rounded-2xl shadow-md p-6 backdrop-blur"
          >
            <div className="w-10 h-1 bg-dustyRose rounded-full mb-5" />
            <p className="text-sm font-semibold uppercase tracking-wide text-cinnamonWood">
              {project.course}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-licorice/75">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-white/55 text-licorice border border-taupe/45 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
