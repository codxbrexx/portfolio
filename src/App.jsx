import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GitHubActivity from "./components/GitHubActivity";
import CustomCursor from "./components/CustomCursor";
import SectionWrapper from "./components/SectionWrapper";
import wave from "./assets/wave.jpg";
import wave1 from "./assets/wave1.jpg";

const App = () => {
  return (
    <div className="bg-[var(--background)] max-w-screen min-h-screen text-slate-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <CustomCursor />
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>
      
      <Navbar />
      <div className="relative z-10">
        <SectionWrapper id="hero">
          <Hero />
        </SectionWrapper>
      </div>
      
      <div className="relative z-10 space-y-20 md:space-y-32 pb-20">
        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        
        {/* <SectionWrapper id="experience">
          <WorkExperience />
        </SectionWrapper> */}
        
        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>
        
        <SectionWrapper id="github">
          <GitHubActivity />
        </SectionWrapper>
        
        <SectionWrapper id="about">
          <AboutMe />
        </SectionWrapper>
        
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
