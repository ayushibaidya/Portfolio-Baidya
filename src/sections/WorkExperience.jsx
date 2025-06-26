export default function WorkExperience() {
    return (
      <section
        id="work-experience"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-licorice relative z-10 snap-start"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
  
        <div className="max-w-4xl w-full p-8 rounded-xl shadow-lg border">
          {/* Adobe Logo & Role Header */}
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-full shadow-md p-2 flex items-center justify-center">
              <img src="/adobe-logo.png" alt="Adobe Logo" className="object-contain w-full h-full" />
            </div>
            <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-2xl font-semibold">Salesforce Support Analyst</h3>
              <p className="text-gray-600 italic">Adobe Systems, Noida, India</p>
              <p className="text-sm text-gray-500">May 2023 – October 2024</p>
            </div>
          </div>
  
          <ul className="list-disc list-inside text-base space-y-3 text-gray-700">
            <li>
              <strong>Auto-Document Populate System:</strong> Streamlined case management in ServiceNow, collaborating with developers to automate documentation, improving SLA by 7%.
            </li>
            <li>
              <strong>Summary Tile Feature:</strong> Designed and implemented a role clarification system to reduce misrouted cases and breached cases by 8%.
            </li>
            <li>
              <strong>Trend Analysis Automation:</strong> Built a Power BI dashboard to automate and visualize weekly team performance and trends.
            </li>
            <li>
              <strong>Case Management:</strong> Managed and resolved cases related to Salesforce and Microsoft Dynamics 365 on ServiceNow, improving operational workflows and team performance.
            </li>
          </ul>
  <br />
          {/* Internship */}
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-full shadow-md p-2 flex items-center justify-center">
              <img src="/adobe-logo.png" alt="Adobe Logo" className="object-contain w-full h-full" />
            </div>
            <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-2xl font-semibold">Salesforce Support Analyst Intern</h3>
              <p className="text-gray-600 italic">Adobe Systems, Noida, India</p>
              <p className="text-sm text-gray-500">May 2022 – July 2022</p>
            </div>
          </div>

          <ul className="list-disc list-inside text-base space-y-3 text-gray-700">
            <li>
              Supported optimization of Salesforce case workflows on ServiceNow to improve efficiency.
            </li>
            <li>
              Gained hands-on experience with Salesforce.com, ServiceNow, and QA testing for system consistency and integration.
            </li>
          </ul>
  
          {/* Technologies & Tools */}
          <div className="max-w-3xl w-full">
            <h3 className="text-2xl font-semibold mb-4 text-center">Technologies & Tools</h3>
                    <ul className="flex flex-wrap justify-center gap-4">
                    <li className="bg-blue-200 text-blue-800 px-4 py-2 rounded shadow">Salesforce.com</li>
                    <li className="bg-indigo-200 text-indigo-800 px-4 py-2 rounded shadow">Microsoft Dynamics 365</li>
                    <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow">ServiceNow</li>
                    <li className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded shadow">Power BI</li>
                    <li className="bg-green-200 text-green-800 px-4 py-2 rounded shadow">Microsoft Excel</li>
                    <li className="bg-pink-200 text-pink-700 px-4 py-2 rounded shadow">Testing / QA</li>
                    <li className="bg-green-300 text-green-900 px-4 py-2 rounded shadow">Automation</li>
                </ul>
            </div>
        </div>
      </section>
    );
  }
  