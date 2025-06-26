export default function Education() {
    return (
      <section
        id="education"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-licorice relative z-10"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Education</h2>
        <ul className="max-w-3xl list-disc list-inside space-y-4 text-lg">
          <li>
            <strong>NIT Jamshedpur</strong> — Bachelor of Technology in Computer Science (2019–2023)
            <p className="mt-1">Relevant coursework: Data Structures, Algorithms, Web Development, etc.</p>
          </li>
          <li>
            <strong>XYZ High School</strong> — Completed Higher Secondary (2017–2019)
          </li>
          {/* Add more entries */}
        </ul>
      </section>
    );
  }
  