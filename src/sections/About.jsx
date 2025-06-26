export default function About() {
    return (
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10 snap-start snap-always"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-licorice">About Me</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-center text-licorice">
          I’m an aspiring software developer with a strong foundation in Computer Science. I graduated with a B.Tech in Computer Science and Engineering from NIT Jamshedpur, and have since worked for 1.5 years at Adobe Systems India Pvt. Ltd. as a Salesforce Support Analyst, where I gained experience in CRM platforms and automation.
        </p>
        <br />
        <p className="max-w-3xl text-lg leading-relaxed text-center text-licorice">
          I will be pursuing my Master’s in Computer Science at Northeastern University starting Fall 2025. Currently, I’m focused on expanding my skills in full stack development, Python, Java, and exploring modern technologies to build impactful and scalable applications.
        </p>
<br />
<br />
<br />
        {/* Technologies & Tools */}
      <div className="max-w-3xl w-full mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-center">Technologies & Tools</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded shadow">Python</li>
          <li className="bg-red-200 text-red-700 px-4 py-2 rounded shadow">Java</li>
          <li className="bg-blue-200 text-blue-800 px-4 py-2 rounded shadow">C++</li>
          <li className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow">MySQL</li>
          <li className="bg-green-200 text-green-800 px-4 py-2 rounded shadow">Express</li>
          <li className="bg-green-300 text-green-900 px-4 py-2 rounded shadow">Node.js</li>
          <li className="bg-orange-200 text-orange-800 px-4 py-2 rounded shadow">Git</li>
          <li className="bg-pink-200 text-pink-700 px-4 py-2 rounded shadow">Postman</li>
          <li className="bg-green-400 text-green-900 px-4 py-2 rounded shadow">MongoDB</li>
          <li className="bg-yellow-300 text-yellow-900 px-4 py-2 rounded shadow">JavaScript</li>
        </ul>
      </div>
      </section>
    );
  }
  