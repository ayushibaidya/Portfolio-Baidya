import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Academics from "./sections/Academics.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Metadata from "./components/Metadata.jsx";
import { projects } from "./data/portfolio.js";

export default function App({
  path = typeof window === "undefined" ? "/" : window.location.pathname,
}) {
  const cleanPath = path.replace(/\/+$/, "") || "/";
  const project = projects.find(
    (item) => `/projects/${item.slug}` === cleanPath,
  );
  const notFound = cleanPath !== "/" && !project;
  return (
    <>
      <Metadata project={project} notFound={notFound} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar isProject={Boolean(project)} />
      <main id="main" tabIndex="-1">
        {project ? (
          <ProjectDetail project={project} />
        ) : notFound ? (
          <div className="container not-found">
            <p className="eyebrow">404 / Page not found</p>
            <h1>Let’s get you back.</h1>
            <p>This page could not be found.</p>
            <a className="button button-primary" href="/">
              Back to portfolio
            </a>
          </div>
        ) : (
          <>
            <Home />
            <Projects />
            <WorkExperience />
            <Skills />
            <About />
            <Academics />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
