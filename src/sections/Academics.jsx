const education = [
  {
    school: "Northeastern University",
    college: "Khoury College of Computer Sciences",
    location: "Boston, MA",
    degree: "Master of Science, Computer Science",
    dates: "Aug 2025 - Apr 2027",
    cgpa: "3.7/4.0",
    status: "In Progress",
    logo: "/neu-logo.png",
    logoAlt: "Northeastern University Logo",
    borderColor: "border-roseHover",
    badgeClass: "bg-dustyRose/20 text-cherryRose border-dustyRose/40",
    coursework: [
      "Computer Systems (C)",
      "OS Implementation (C)",
      "Programming Design Paradigm (Java)",
      "Algorithms",
    ],
  },
  {
    school: "National Institute of Technology, Jamshedpur",
    college: "Computer Science and Engineering",
    location: "India",
    degree: "Bachelor of Technology",
    dates: "Jul 2019 - May 2023",
    cgpa: "7.82/10",
    status: "Completed",
    logo: "/nit-jsr-logo.png",
    logoAlt: "NIT Jamshedpur Logo",
    borderColor: "border-cinnamonWood",
    badgeClass: "bg-cinnamonWood/15 text-cinnamonWood border-cinnamonWood/35",
    coursework: [
      "Operating Systems",
      "Database Management Systems",
      "Design and Analysis of Algorithms",
      "OOP",
    ],
  },
]

export default function Academics() {
  return (
    <section
      id="academics"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-licorice relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-4 text-center max-w-3xl w-full">
        Education
      </h2>

      <div className="max-w-5xl w-full grid gap-6">
        {education.map((item) => (
          <article
            key={item.school}
            className="bg-antiqueWhite/90 border border-taupe/45 rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div
                className={`w-20 h-20 rounded-full bg-white p-3 border-2 ${item.borderColor} shadow-md flex items-center justify-center flex-shrink-0 mx-auto md:mx-0`}
              >
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.school}</h3>
                    <p className="text-lg italic text-gray-600">{item.degree}</p>
                    <p className="text-sm text-gray-500">{item.college}</p>
                  </div>

                  <span
                    className={`${item.badgeClass} self-center md:self-start px-3 py-1 rounded-full border text-sm font-medium`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-gray-600 md:grid-cols-3">
                  <p>
                    <span className="font-semibold text-licorice">Location:</span>{" "}
                    {item.location}
                  </p>
                  <p>
                    <span className="font-semibold text-licorice">Dates:</span>{" "}
                    {item.dates}
                  </p>
                  <p>
                    <span className="font-semibold text-licorice">CGPA:</span>{" "}
                    <span className="text-roseHover font-semibold">{item.cgpa}</span>
                  </p>
                </div>

                <div className="mt-5">
                  <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                  <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                    {item.coursework.map((course) => (
                      <li
                        key={course}
                        className="px-3 py-1 rounded-full bg-white/55 text-licorice text-sm border border-taupe/40"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
