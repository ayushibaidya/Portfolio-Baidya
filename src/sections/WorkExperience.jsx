export default function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-licorice relative z-10 snap-start"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>

      <div className="max-w-4xl w-full p-8 rounded-xl shadow-lg border">
        {/* Adobe – Full-time */}
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-full shadow-md p-2 flex items-center justify-center">
            <img src="/adobe-logo.png" alt="Adobe Logo" className="object-contain w-full h-full" />
          </div>
          <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold">Salesforce Support Analyst</h3>
            <p className="text-gray-600 italic">Adobe Systems, Noida, India</p>
            <p className="text-sm text-gray-500">May 2023 – Oct 2024</p>
          </div>
        </div>

        <ul className="list-disc list-inside text-base space-y-3 text-gray-700">
          <li>
            <strong>Auto-Document Populate:</strong> automated case documentation and streamlined UI in ServiceNow with the dev team, reducing SLA time by <strong>7%</strong>.
          </li>
          <li>
            <strong>Summary Tile (role clarification):</strong> improved routing accuracy for incoming cases, lowering breached cases by <strong>8%</strong>.
          </li>
          <li>
            <strong>Trend analysis automation:</strong> built a Power BI dashboard for weekly team/individual metrics; standardized views and cut manual reporting effort.
          </li>
          <li>
            <strong>Production operations:</strong> triaged and resolved cases across ServiceNow, Salesforce, and Microsoft Dynamics 365; authored runbooks to improve handoffs and incident resolution.
          </li>
        </ul>

        <br />

        {/* Adobe – Internship */}
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-full shadow-md p-2 flex items-center justify-center">
            <img src="/adobe-logo.png" alt="Adobe Logo" className="object-contain w-full h-full" />
          </div>
          <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold">Salesforce Support Analyst Intern</h3>
            <p className="text-gray-600 italic">Adobe Systems, Noida, India</p>
            <p className="text-sm text-gray-500">May 2022 – Jul 2022</p>
          </div>
        </div>

        <ul className="list-disc list-inside text-base space-y-3 text-gray-700">
          <li>Supported optimization of Salesforce workflows on ServiceNow to improve case throughput.</li>
          <li>Contributed to testing and validation for new features; assisted with production triage and data consistency checks.</li>
        </ul>

        {/* Technologies & Tools used at Adobe */}
        <div className="max-w-3xl w-full mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Technologies &amp; Tools</h3>
          <ul className="flex flex-wrap justify-center gap-4">
            <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow">ServiceNow</li>
            <li className="bg-blue-200 text-blue-800 px-4 py-2 rounded shadow">Salesforce</li>
            <li className="bg-indigo-200 text-indigo-800 px-4 py-2 rounded shadow">Microsoft Dynamics 365</li>
            <li className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded shadow">Power BI</li>
            <li className="bg-green-200 text-green-800 px-4 py-2 rounded shadow">Microsoft Excel</li>
            <li className="bg-teal-200 text-teal-800 px-4 py-2 rounded shadow">SQL (reporting)</li>
            <li className="bg-pink-200 text-pink-700 px-4 py-2 rounded shadow">Testing / QA</li>
            <li className="bg-emerald-200 text-emerald-800 px-4 py-2 rounded shadow">Process Automation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
