const experiences = [
  {
    role: "CRM Operations Analyst",
    dates: "May 2023 – October 2024",
    type: "Full-time",
    bullets: [
      "Contributed to a 7% reduction in average case handling time by investigating production CRM workflow issues across Salesforce, Dynamics 365, and ServiceNow.",
      "Supported a Salesforce-to-Dynamics 365 migration with zero reported data loss through defect documentation, runbooks, and validation tracking.",
      "Reduced cross-functional clarification requests by 18% by documenting recurring issues, workflow dependencies, and escalation procedures.",
      "Moved ServiceNow CSV and Excel reporting into a Power BI dashboard to support weekly SLA reviews for a 10+ person team.",
    ],
  },
  {
    role: "Salesforce Support Analyst Intern",
    dates: "May 2022 – July 2022",
    type: "Internship",
    bullets: [
      "Analyzed ServiceNow case routing and prototyped watchlist-based visibility for queue transitions and cross-functional support handoffs.",
      "Prototyped case handoff actions and SLA timeline tooling to clarify support workflow status and escalation paths.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <span id="work-experience" className="anchor-alias" />
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Professional experience</p>
            <h2 id="experience-title">A foundation in production.</h2>
          </div>
          <p>
            Enterprise technology support at Adobe.
            <br className="desktop-break" /> Real workflows, careful
            investigation, clear documentation.
          </p>
        </div>
        <div className="experience-layout">
          <div className="company-summary">
            <img
              src="/adobe-logo.png"
              width="42"
              height="42"
              alt=""
              loading="lazy"
            />
            <h3>Adobe Systems</h3>
            <p>Noida, India</p>
            <div className="company-tags">
              <span>Salesforce</span>
              <span>Dynamics 365</span>
              <span>ServiceNow</span>
              <span>Power BI</span>
            </div>
            <p className="experience-context">
              Production CRM operations, migration support, and workflow
              analysis.
            </p>
          </div>
          <div className="experience-timeline">
            {experiences.map((item) => (
              <article className="experience-entry" key={item.role}>
                <div className="experience-heading">
                  <div>
                    <p className="mono experience-date">{item.dates}</p>
                    <h3>{item.role}</h3>
                  </div>
                  <span className="subtle-badge">{item.type}</span>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
