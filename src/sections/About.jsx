export default function About() {
  return (
    <section
      id="about"
      className="section section-about"
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <div>
          <p className="eyebrow">04 / About & education</p>
          <h2 id="about-title">
            Curious about how
            <br />
            systems work.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Ayushi, a Computer Science master’s student at Northeastern
            University in Boston. I’m interested in the details that make
            software dependable: clear API boundaries, consistent data, explicit
            state transitions, and tests that exercise failure paths.
          </p>
          <p>
            Before graduate school, I worked in CRM operations and enterprise
            technology support at Adobe. That experience made the value of
            investigation and good documentation concrete. Today, I’m applying
            that care to software engineering projects and systems coursework.
          </p>
          <div className="about-person">
            <img
              src="/portfolio-picture.jpeg"
              width="56"
              height="56"
              loading="lazy"
              alt="Ayushi speaking at an Adobe event"
            />
            <div>
              <strong>Ayushi Baidya</strong>
              <span>Boston, MA · MS Computer Science ’27</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
