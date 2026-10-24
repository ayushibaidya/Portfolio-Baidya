import { projects, profile } from "../data/portfolio.js";
import ProjectDiagram from "../components/ProjectDiagram.jsx";
import Icon from "../components/Icon.jsx";

export default function ProjectDetail({ project }) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <div className="container case-study">
      <a className="back-link" href="/#projects">
        <Icon name="back" />
        All projects
      </a>
      <header className="case-header">
        <p className="eyebrow">
          {project.number} / {project.category}
        </p>
        <h1>{project.name}</h1>
        <p className="case-subtitle">{project.subtitle}</p>
        <p className="case-description">{project.description}</p>
        <span
          className={`project-status${project.slug === "device-health" ? " status-development" : ""}`}
        >
          {project.status}
        </span>
        <div className="case-actions">
          {project.repo ? (
            <a
              className="button button-primary"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" />
              View repository
              <Icon name="external" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <p className="repository-note">{project.repoNote}</p>
          )}
          <a className="text-link" href={`mailto:${profile.email}`}>
            Contact Me
            <Icon name="external" />
          </a>
        </div>
      </header>
      <div className="case-layout">
        <aside className="case-toc">
          <p className="mono">IN THIS PROJECT</p>
          <nav aria-label="Case study contents">
            {[
              ["problem", "Problem"],
              ["solution", "Solution"],
              ["technology", "Technology"],
              ["architecture", "Architecture"],
              ["contributions", "My contributions"],
              ["decisions", "Design decisions"],
              ["testing", "Testing & reliability"],
              ["status", "Current status"],
              ["source", "Source & links"],
            ].map(([id, name]) => (
              <a href={`#${id}`} key={id}>
                {name}
              </a>
            ))}
          </nav>
        </aside>
        <div className="case-content">
          <section id="problem">
            <p className="eyebrow">01 / Context</p>
            <h2>Problem statement</h2>
            <p>{project.problem}</p>
          </section>
          <section id="solution">
            <p className="eyebrow">02 / Approach</p>
            <h2>Solution overview</h2>
            <p>{project.solution}</p>
          </section>
          <section id="technology">
            <p className="eyebrow">03 / Toolkit</p>
            <h2>{project.stackLabel || "Technology stack"}</h2>
            <ul className="tech-list case-tech">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>
          <section id="architecture">
            <p className="eyebrow">04 / Structure</p>
            <h2>System architecture</h2>
            <ProjectDiagram project={project} />
            <p>{project.architecture}</p>
          </section>
          <section id="contributions">
            <p className="eyebrow">05 / Ownership</p>
            <h2>My contributions</h2>
            <ul className="case-bullets">
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.collaboration && (
              <p className="case-note">{project.collaboration}</p>
            )}
          </section>
          <section id="decisions">
            <p className="eyebrow">06 / Engineering</p>
            <h2>Challenges & design decisions</h2>
            <div className="decision-list">
              {project.decisions.map((decision, i) => (
                <div key={decision.title}>
                  <span className="mono">0{i + 1}</span>
                  <div>
                    <h3>{decision.title}</h3>
                    <p>{decision.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section id="testing">
            <p className="eyebrow">07 / Correctness</p>
            <h2>Testing & reliability</h2>
            <p>{project.testing}</p>
          </section>
          <section id="status">
            <p className="eyebrow">08 / Progress</p>
            <h2>Results & current status</h2>
            <div className="status-panel">
              <span className="project-status">{project.status}</span>
              <p>{project.result}</p>
            </div>
          </section>
          <section id="source">
            <p className="eyebrow">09 / Further reading</p>
            <h2>Source & links</h2>
            {project.sources.length ? (
              <ul className="source-links">
                {project.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.label}
                      <Icon name="external" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                {project.repoNote}{" "}
                <a href={`mailto:${profile.email}`}>
                  Contact me about the project.
                </a>
              </p>
            )}
          </section>
        </div>
      </div>
      <a className="next-project" href={`/projects/${next.slug}/`}>
        <span>
          <span className="eyebrow">Next project</span>
          <strong>{next.name}</strong>
        </span>
        <Icon name="arrow" />
      </a>
    </div>
  );
}
