export default function Navbar() {
    return (
      <nav className="w-full bg-white shadow p-4 fixed top-0 z-50">
        <div className="flex justify-center space-x-6 text-gray-800 font-medium">
          <a href="#home" className="hover:text-roseHover">Home</a>
          <a href="#about" className="hover:text-roseHover">About</a>
          <a href="#academics" className="hover:text-roseHover">Academics</a>
          <a href="#work-experience" className="hover:text-roseHover">Work Experience</a>
          <a href="#projects" className="hover:text-roseHover">Projects</a>
          <a href="#contact" className="hover:text-roseHover">Contact</a>
        </div>
      </nav>
    );
  }
  