import Icon from "../components/Icon.jsx";
import { profile } from "../data/portfolio.js";

export default function Home() {
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p className="availability">
          <span />
          {profile.availability}
        </p>
        <span className="mono hero-index">PORTFOLIO / 2027</span>
      </div>
      <p className="eyebrow hero-eyebrow">
        Ayushi Baidya · Software Engineer · MS Computer Science
      </p>
      <h1 id="hero-title">
        Building reliable software,
        <br /> <span>from backend services to distributed systems.</span>
      </h1>
      <div className="hero-bottom">
        <div className="hero-intro">
          <p>
            I’m Ayushi, a Computer Science master’s student at Northeastern
            University graduating in <strong>May 2027</strong>. I build backend
            services, full-stack applications, and software systems using Java,
            Python, Go, TypeScript, PostgreSQL, and AWS.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore Projects <Icon name="arrow" />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me <Icon name="arrow" />
            </a>
          </div>
        </div>
        <div className="hero-profile">
          <div className="profile-rule" />
          <dl>
            <div>
              <dt>Based in</dt>
              <dd>Boston, MA</dd>
            </div>
            <div>
              <dt>Graduating</dt>
              <dd>
                May 2027 <span>· Northeastern</span>
              </dd>
            </div>
          </dl>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" />
              View GitHub <span className="sr-only">(opens in a new tab)</span>
              <Icon name="external" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
              Connect on LinkedIn{" "}
              <span className="sr-only">(opens in a new tab)</span>
              <Icon name="external" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <span className="mono">BACKEND · FULL-STACK · SYSTEMS</span>
        <a href="#projects">
          Explore selected work <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
