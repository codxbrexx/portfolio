import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import wave from "./assets/wave.jpg";
import wave1 from "./assets/wave1.jpg";

const App = () => {
  return (
    <div className="bg-[var(--background)] max-w-screen ">
      <div style={{
        // backgroundImage: `url(${wave1})`,
        backgroundPosition: "50% 50%"
      }}>
      <Navbar  />
      <Hero />
      </div>
      
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
