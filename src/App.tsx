import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import ValueProposition from "./components/sections/ValueProposition";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import { Contact } from "./components/sections/OtherSections";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <SocialSidebar />
      <Footer />
    </div>
  );
}

export default App;
