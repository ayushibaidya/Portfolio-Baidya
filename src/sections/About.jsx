export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-licorice">About Me</h2>

      <p className="max-w-3xl text-lg leading-relaxed text-center text-licorice">
        I’m a systems-leaning MS in Computer Science candidate (Northeastern ’27) with foundations
        in C and Linux from a user-space checkpoint–restart project
        (<code>signals</code>, <code>mmap</code>, <code>ucontext</code>) and a CPU emulator. I spent
        1.5 years at Adobe as a Salesforce Support Analyst, where I automated ServiceNow workflows
        and built Power BI reporting used for weekly team metrics.
      </p>
      <br />
      <p className="max-w-3xl text-lg leading-relaxed text-center text-licorice">
        I’m targeting Summer 2026 internships in backend engineering, reliability/production
        engineering, and developer productivity. Currently strengthening Java/Python backends,
        SQL/PostgreSQL, Linux tooling, and AWS fundamentals.
      </p>

      <br />
      <br />
      <br />

      {/* Technologies & Tools */}
      <div className="max-w-3xl w-full mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-center">Technologies & Tools</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded shadow">C</li>
          <li className="bg-red-200 text-red-700 px-4 py-2 rounded shadow">C++</li>
          <li className="bg-blue-200 text-blue-800 px-4 py-2 rounded shadow">Java</li>
          <li className="bg-yellow-300 text-yellow-900 px-4 py-2 rounded shadow">Python</li>
          <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow">SQL</li>

          <li className="bg-green-200 text-green-800 px-4 py-2 rounded shadow">
            Linux (signals, mmap)
          </li>
          <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow">GDB</li>

          <li className="bg-blue-200 text-blue-800 px-4 py-2 rounded shadow">PostgreSQL</li>
          <li className="bg-green-400 text-green-900 px-4 py-2 rounded shadow">MySQL</li>

          <li className="bg-orange-200 text-orange-800 px-4 py-2 rounded shadow">REST / HTTP</li>
          <li className="bg-pink-200 text-pink-700 px-4 py-2 rounded shadow">JSON</li>

          <li className="bg-green-300 text-green-900 px-4 py-2 rounded shadow">AWS</li>
          <li className="bg-orange-200 text-orange-800 px-4 py-2 rounded shadow">Git / GitHub</li>
          <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow">GitHub Actions (CI)</li>
          <li className="bg-red-200 text-red-700 px-4 py-2 rounded shadow">Gradle</li>
          <li className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded shadow">JUnit</li>
          <li className="bg-pink-200 text-pink-700 px-4 py-2 rounded shadow">Postman</li>
          <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow">Jira</li>
          <li className="bg-blue-200 text-blue-800 px-4 py-2 rounded shadow">Power BI</li>

          <li className="bg-green-300 text-green-900 px-4 py-2 rounded shadow">ServiceNow</li>
          <li className="bg-green-200 text-green-800 px-4 py-2 rounded shadow">Salesforce</li>
          <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow">
            Microsoft Dynamics 365
          </li>
        </ul>
      </div>
    </section>
  );
}
