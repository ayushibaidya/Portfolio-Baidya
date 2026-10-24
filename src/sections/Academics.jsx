import AcademicCoursework from "./AcademicCoursework.jsx";
const education = [
  {
    school: "Northeastern University",
    degree: "MS Computer Science",
    dates: "September 2025 – May 2027",
    gpa: "GPA: 3.7/4.0",
    location: "Boston, MA",
    logo: "/neu-logo.png",
  },
  {
    school: "National Institute of Technology, Jamshedpur",
    degree: "B.Tech Computer Science and Engineering",
    dates: "July 2019 – May 2023",
    gpa: "CGPA: 7.82/10",
    location: "Jamshedpur, India",
    logo: "/nit-jsr-logo.png",
  },
];
const courses = [
  "Programming Design Paradigms (Java)",
  "Algorithms",
  "Database Management Systems",
  "Fundamentals of Computer Networking",
  "Machine Learning",
  "Computer Systems",
];

export default function Academics() {
  return (
    <section
      id="academics"
      className="education-section"
      aria-labelledby="education-title"
    >
      <div className="container">
        <h2 id="education-title" className="small-section-title">
          Education
        </h2>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.school}>
              <div className="school-logo">
                <img
                  src={item.logo}
                  width="42"
                  height="42"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <p className="mono education-date">{item.dates}</p>
                <h3>{item.school}</h3>
                <p className="degree">{item.degree}</p>
                <p className="education-meta">
                  {item.location}
                  <span>{item.gpa}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="coursework">
          <h3>Relevant coursework</h3>
          <ul className="course-list">
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
          <p className="academic-note">
            Academic foundations: TCP/UDP, HTTP, DNS, sockets, networking
            performance, and Wireshark; regression, classification, model
            evaluation, Python, and PyTorch.
          </p>
        </div>
        <AcademicCoursework />
      </div>
    </section>
  );
}
