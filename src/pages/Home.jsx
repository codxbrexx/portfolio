import React from "react";

import { motion } from "framer-motion";
import { pageVariants } from "../utils/animation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GitHubActivity from "../components/GitHubActivity";
import SectionWrapper from "../components/SectionWrapper";
import AboutMe from "../components/AboutMe";

const Home = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
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
        </motion.div>
    );
};

export default Home;
