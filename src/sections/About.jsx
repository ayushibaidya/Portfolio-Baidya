const focusAreas = [
  {
    title: "Backend APIs",
    description: "Go, REST APIs, JWT auth, PostgreSQL, RLS, pgx pools, and WebSocket confirmations.",
    accentClass: "bg-cherryRose",
  },
  {
    title: "Systems / OS",
    description: "Linux, C, RISC-V, scheduling, syscalls, traps, concurrency, debugging, and OS labs.",
    accentClass: "bg-cinnamonWood",
  },
  {
    title: "Production Ops",
    description: "Production issue triage, workflow automation, SLA analysis, Power BI dashboarding, migration documentation, and runbook-driven debugging.",
    accentClass: "bg-dustyRose",
  },
]

const skillGroups = [
  {
    title: "Languages",
    skills: ["C", "C++", "Go", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["REST APIs", "JWT", "PostgreSQL", "pgx", "WebSockets", "Node.js", "Express"],
  },
  {
    title: "Systems",
    skills: ["Linux", "GDB", "strace", "perf", "RISC-V", "threads", "mutexes", "scheduling"],
  },
  {
    title: "Cloud / Databases",
    skills: ["AWS Certified Cloud Practitioner", "EC2", "RDS", "S3", "IAM", "MySQL"],
  },
  {
    title: "Tools / Ops",
    skills: ["GitHub Actions", "Postman", "JUnit", "ServiceNow", "Power BI", "Salesforce", "Dynamics 365"],
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-licorice">
        About Me
      </h2>

      <div className="max-w-4xl space-y-5 text-center text-licorice">
        <p className="text-lg leading-relaxed">
          I’m an MSCS ’27 candidate at Northeastern University focused on backend,
          systems, and embedded-adjacent software engineering. I like building software
          close to real execution paths: REST APIs in Go, PostgreSQL-backed systems,
          Linux/C projects, RISC-V OS labs, schedulers, concurrency primitives, and
          debugging-heavy tools.
        </p>
        <p className="text-lg leading-relaxed">
          Before grad school, I spent 1.5 years at Adobe working across Salesforce,
          Microsoft Dynamics 365, ServiceNow, and Power BI, where I resolved production
          workflow issues, improved SLA visibility, automated reporting for a 10+ person
          team, and documented systems during a live CRM migration. I’m currently seeking
          Software Engineering Co-op or Intern roles where I can work on backend infrastructure,
          systems software, reliability, developer tools, or embedded-adjacent products.
        </p>
      </div>

      <div className="max-w-5xl w-full grid gap-4 md:grid-cols-3 mt-10">
        {focusAreas.map((area) => (
          <article
            key={area.title}
            className="bg-antiqueWhite/90 border border-dustyRose rounded-xl shadow-md p-5 text-center backdrop-blur"
          >
            <div className={`w-10 h-1 ${area.accentClass} rounded-full mx-auto mb-4`} />
            <h3 className="text-xl font-semibold text-licorice">{area.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-licorice/80">
              {area.description}
            </p>
          </article>
        ))}
      </div>

      <div className="max-w-5xl w-full mt-10">
        <h3 className="text-2xl font-semibold mb-6 text-center text-licorice">
          Technologies & Tools
        </h3>
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-antiqueWhite/90 border border-dustyRose rounded-xl shadow-sm p-5 backdrop-blur"
            >
              <h4 className="font-semibold mb-3 text-licorice">{group.title}</h4>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-white/55 text-licorice border border-taupe/45 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
