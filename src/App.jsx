import Navbar from "./components/Navbar.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Education from "./sections/Education.jsx";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedBackground /> {/* ⬅ Fixed background */}
      <main>
        <Home />
        <About />
        <Education/>
      </main>
    </>
  );
}

export default App;
