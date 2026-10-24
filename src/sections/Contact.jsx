import { profile } from "../data/portfolio.js";
import Icon from "../components/Icon.jsx";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section section-contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">05 / Get in touch</p>
          <h2 id="contact-title">Let’s connect.</h2>
          <p>
            I’m seeking full-time software engineering roles starting in 2027
            and internship or co-op opportunities in Spring 2027, across
            backend, full-stack, infrastructure, and software quality.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <Icon name="external" />
          </a>
        </div>
        <div className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn
            <Icon name="external" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            View GitHub
            <Icon name="external" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href={`mailto:${profile.email}`}>
            Contact Me
            <Icon name="external" />
          </a>
        </div>
      </div>
    </section>
  );
}
