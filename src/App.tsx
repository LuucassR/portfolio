import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import {
  SkillsAndServices,
  Contact,
} from "./components/sections/OtherSections";
import CVSection from "./components/sections/CVSection";

function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SkillsAndServices />
        <Projects />
        <CVSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
