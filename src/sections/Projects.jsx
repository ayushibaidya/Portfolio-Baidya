import { projects } from "../data/portfolio.js";
import ProjectDiagram from "../components/ProjectDiagram.jsx";
import Icon from "../components/Icon.jsx";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section section-projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="projects-title">Engineering, in practice.</h2>
          </div>
          <p>
            Backend services, application design, and systems work.
            <br className="desktop-break" /> Each project, with its decisions
            and current status.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card card-${project.slug}`}
              key={project.slug}
            >
              <ProjectDiagram project={project} />
              <div className="project-body">
                <div className="project-meta">
                  <span className="mono">
                    {project.number} / {project.category}
                  </span>
                  <span
                    className={`project-status${project.slug === "device-health" ? " status-development" : ""}`}
                  >
                    {project.shortStatus}
                  </span>
                </div>
                <h3>
                  <a href={`/projects/${project.slug}/`}>
                    {project.name}
                    <Icon name="external" />
                  </a>
                </h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.stackLabel && (
                  <p className="stack-label">{project.stackLabel}</p>
                )}
                <ul
                  className="tech-list"
                  aria-label={`${project.name} technologies`}
                >
                  {project.cardStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={`/projects/${project.slug}/`} className="text-link">
                    Read case study <Icon name="arrow" />
                  </a>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} on GitHub (opens in a new tab)`}
                    >
                      <Icon name="github" />
                      GitHub
                      <Icon name="external" />
                    </a>
                  ) : (
                    <span className="source-private">
                      Source unavailable publicly
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
