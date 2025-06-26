import Navbar from "./components/Navbar.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Academics from "./sections/Academics.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedBackground /> 
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <section className="min-h-screen snap-start">
          <Home />
        </section>
        <section className="min-h-screen snap-start">
          <About />
        </section>
        <section className="min-h-screen snap-start">
          <Academics />
        </section>
        <section className="min-h-screen snap-start">
          <WorkExperience />
        </section>
        <section className="min-h-screen snap-start">
          <Projects />
        </section>
        <section className="min-h-screen snap-start">
          <Contact />
        </section>
</main>
    </>
  );
}

export default App;
