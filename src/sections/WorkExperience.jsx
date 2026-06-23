const experiences = [
  {
    role: "CRM Operations Analyst",
    focus: "Salesforce and Dynamics 365",
    company: "Adobe Systems",
    location: "Noida, India",
    type: "Full-time",
    dates: "May 2023 - Oct 2024",
    logo: "/adobe-logo.png",
    logoAlt: "Adobe Logo",
    badgeClass: "bg-dustyRose/20 text-cherryRose border-dustyRose/40",
    bullets: [
      {
        label: "Production triage",
        text: "Reduced average case handling time by 7% across Salesforce.com and Microsoft Dynamics 365 by resolving production issues in leads, opportunities, CPQ, and account management through ServiceNow.",
      },
      {
        label: "Reporting automation",
        text: "Eliminated manual reporting overhead for a 10+ person team by moving ServiceNow CSV exports from Excel pivot tables into a live Power BI dashboard for weekly SLA reviews.",
      },
      {
        label: "CRM migration support",
        text: "Accelerated resolution across 2 CRM platforms during a live Salesforce to Dynamics 365 migration by maintaining defect documentation and runbooks, ensuring zero data loss and reducing clarification requests by 18%.",
      },
    ],
    highlights: ["7% faster case handling", "10+ person reporting dashboard", "18% fewer clarification requests"],
  },
  {
    role: "Salesforce Support Analyst Intern",
    focus: "ServiceNow workflow optimization",
    company: "Adobe Systems",
    location: "Noida, India",
    type: "Internship",
    dates: "May 2022 - Jul 2022",
    logo: "/adobe-logo.png",
    logoAlt: "Adobe Logo",
    badgeClass: "bg-cinnamonWood/15 text-cinnamonWood border-cinnamonWood/35",
    bullets: [
      {
        label: "Case routing",
        text: "Owned a ServiceNow case routing optimization project by prototyping watchlist-based visibility for queue transitions and support handoffs.",
      },
      {
        label: "Workflow tooling",
        text: "Built a Copy and Create Child UI action concept for SFA handoffs and a custom SLA timeline differentiator to reduce ambiguity across the case lifecycle.",
      },
    ],
    highlights: ["ServiceNow workflows", "SFA handoffs", "SLA timeline visibility"],
  },
]

const toolGroups = [
  {
    title: "CRM Platforms",
    tools: [
      "Salesforce.com",
      "Microsoft Dynamics 365",
      "ServiceNow",
      "CPQ workflows",
      "Lead workflows",
      "Opportunity workflows",
    ],
  },
  {
    title: "Reporting and Analysis",
    tools: [
      "Power BI",
      "Excel pivot tables",
      "ServiceNow CSV exports",
      "SLA dashboards",
      "Case volume trends",
      "Root cause analysis",
    ],
  },
  {
    title: "Operations",
    tools: [
      "Production triage",
      "Defect documentation",
      "Runbooks",
      "QA validation",
      "Migration support",
      "Process automation",
    ],
  },
]

export default function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-licorice relative z-10 snap-start"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Work Experience</h2>
      <p className="max-w-2xl text-center text-gray-700 mb-10">
        Production operations experience at Adobe across CRM systems, workflow triage,
        reporting automation, and migration support.
      </p>

      <div className="max-w-5xl w-full grid gap-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.type}`}
            className="bg-antiqueWhite/90 border border-taupe/45 rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-full shadow-md p-2 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={experience.logo}
                  alt={experience.logoAlt}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-semibold">{experience.role}</h3>
                    <p className="text-lg italic text-gray-600">{experience.focus}</p>
                    <p className="text-sm text-gray-500">
                      {experience.company}, {experience.location}
                    </p>
                    <p className="text-sm text-gray-500">{experience.dates}</p>
                  </div>

                  <span
                    className={`${experience.badgeClass} self-center md:self-start px-3 py-1 rounded-full border text-sm font-medium`}
                  >
                    {experience.type}
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-gray-700">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet.label} className="leading-relaxed">
                      <span className="font-semibold text-licorice">{bullet.label}:</span>{" "}
                      {bullet.text}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="px-3 py-1 rounded-full bg-white/55 text-licorice text-sm border border-taupe/40"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        <div className="bg-antiqueWhite/90 border border-taupe/45 rounded-2xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Technologies & Tools
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {toolGroups.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold mb-3 text-center text-licorice">
                  {group.title}
                </h4>
                <ul className="flex flex-wrap justify-center gap-2">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="bg-white/55 text-licorice px-3 py-1 rounded-full border border-taupe/40 text-sm font-medium"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
