import { skillGroups } from "../data/portfolio.js";
import Icon from "../components/Icon.jsx";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section section-skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Technical toolkit</p>
            <h2 id="skills-title">Tools with a purpose.</h2>
          </div>
          <p>
            Built through projects, systems coursework,
            <br className="desktop-break" /> and cloud fundamentals.
          </p>
        </div>
        <dl className="skills-list">
          {skillGroups.map((group, i) => (
            <div className="skill-row" key={group.name}>
              <dt>
                <span className="mono">0{i + 1}</span>
                {group.name}
              </dt>
              <dd>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                {group.note && <p>{group.note}</p>}
              </dd>
            </div>
          ))}
        </dl>
        <div className="certification">
          <span className="certification-icon">
            <Icon name="check" />
          </span>
          <div>
            <p>AWS Certified Cloud Practitioner</p>
            <span>Cloud fundamentals · Certification</span>
          </div>
          <span className="mono certification-label">AWS</span>
        </div>
      </div>
    </section>
  );
}
