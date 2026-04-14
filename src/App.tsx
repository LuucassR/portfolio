import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import { Contact } from "./components/sections/OtherSections";

function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
