export default function Academics() {
  return (
    <section
      id="academics"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-licorice relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-12 text-center max-w-3xl w-full">Academics</h2>

      <div className="max-w-4xl w-full p-8 rounded-xl shadow-lg border">
        {/* NEU (Upcoming MS) */}
        <div className="mb-20 flex flex-col md:flex-row items-center md:items-start relative">
          <div className="w-20 h-20 rounded-full bg-white p-3 z-10 border-2 border-roseHover shadow-md flex items-center justify-center flex-shrink-0">
            <img src="/neu-logo.png" alt="Northeastern University Logo" className="object-contain w-full h-full" />
          </div>
          <div className="md:ml-8 text-center md:text-left mt-4 md:mt-0 w-full">
            <h3 className="text-2xl font-semibold">Northeastern University, Boston</h3>
            <p className="text-lg italic text-gray-600">MS in Computer Science</p>
            <p className="text-sm text-gray-500 mb-2">2025 – 2027 • Khoury College of Computer Sciences</p>
            <p className="text-sm italic text-gray-600">
              Relevant Coursework: Programming Design Paradigm, Computer Systems
            </p>
          </div>
        </div>

        {/* NIT Jamshedpur */}
        <div className="flex flex-col md:flex-row items-center md:items-start relative">
          <div className="w-20 h-20 rounded-full bg-white p-3 z-10 border-2 border-blue-600 shadow-md flex items-center justify-center flex-shrink-0">
            <img src="/nit-jsr-logo.png" alt="NIT Jamshedpur Logo" className="object-contain w-full h-full" />
          </div>
          <div className="md:ml-8 text-center md:text-left mt-4 md:mt-0 w-full">
            <h3 className="text-2xl font-semibold">National Institute of Technology, Jamshedpur</h3>
            <p className="text-lg italic text-gray-600">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="text-sm italic text-gray-500 mb-2">2019 – 2023 | CGPA: <span className="text-roseHover">7.82</span></p>
            <p className="text-sm italic text-gray-600 mb-4">
              Relevant Coursework: Compiler Design (10/10), Database Management System (9/10), Computer Graphics (9/10), Operating System (8/10), Design and Analysis of Algorithms (8/10), Object Oriented System Design (8/10), Digital System Design (8/10), Theory of Computation (8/10), Discrete Structures (8/10), Engineering Mathematics III (9/10)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
